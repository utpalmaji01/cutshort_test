import React, { useState } from "react";
import Logo from "../../assets/logo.png";
// import Loader from "../../components/loader";
import "../../style/onboardng.scss";

const totalStep = 4;

const Heading = (props) => {
  const { headingText, subHeadingText } = props;
  return (
    <>
      <h2 className="text-center">{headingText}</h2>
      <p className="text-center">{subHeadingText}</p>
    </>
  );
};

const UseWorkplaceForCard = (props) => {
  const { heading, subheading, icon } = props;
  return (
    <>
      {icon}
      <span className="font-weight-700 mt-2">{heading}</span>
      <span className="text-muted font-size-14">{subheading}</span>
    </>
  );
};

const OnBoardng = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardngData, setOnboardngData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    useWorkplaceForHimself: true,
  });

  const handleStep = () => {
    console.log(onboardngData, "onboardngData");
    if (currentStep !== totalStep) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep((prev) => prev - 3);
    }
  };
  return (
    <>
      <div className="container py-5 onboardng-container">
        <div className="header d-flex justify-content-center align-items-center">
          <img src={Logo} alt="cutshort_logo" className="logo mr-2" />
          <h3 className="m-0">Eden</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col col-xs-12 col-sm-8 col-md-6 py-3">
            <div className="stepper py-4 d-flex justify-content-center align-items-center">
              {Array.from({ length: totalStep }).map((u, index) => {
                return (
                  <div
                    key={index}
                    className={`each-step ${
                      currentStep === index + 1 || index + 1 < currentStep
                        ? "each-step-active"
                        : ""
                    } d-flex align-items-center ${
                      index + 1 !== totalStep ? "w-25" : ""
                    }`}
                  >
                    <span className="each-step-count rounded-circle d-inline-flex justify-content-center align-items-center">
                      {index + 1}
                    </span>
                    {index + 1 !== totalStep && (
                      <div
                        className="progress flex-grow-1"
                        style={{ height: "1px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${
                              currentStep === index + 1
                                ? "50%"
                                : index + 1 < currentStep
                                ? "100%"
                                : "0%"
                            }`,
                            height: `${
                              currentStep === index + 1
                                ? "1px"
                                : index + 1 < currentStep
                                ? "1px"
                                : "0px"
                            }`,
                          }}
                          aria-valuenow={currentStep === index + 1 ? 50 : 0}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {currentStep === 4 && (
          <>
            <div className="w-100 d-flex pb-3 justify-content-center align-items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                height="60px"
                width="60px"
                color="#664de5"
                stroke-width="0"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
          </>
        )}
        <div className="row flex-column justify-content-center align-items-center">
          <div className="col col-xs-12 col-sm-8 col-md-6 pb-3">
            <Heading
              headingText={
                currentStep === 1
                  ? "Welcome! First things first..."
                  : currentStep === 2
                  ? "Let's set up a homefor all your work."
                  : currentStep === 3
                  ? "How are you planning to use Eden"
                  : currentStep === 4
                  ? `Congratulations, ${
                      onboardngData.displayName.length > 0
                        ? onboardngData.displayName
                        : "Eren"
                    }!`
                  : ""
              }
              subHeadingText={
                currentStep === 1
                  ? "You can always change them later."
                  : currentStep === 2
                  ? "You can always create another workspace later."
                  : currentStep === 3
                  ? "We'll streamline your setup experience accordingly."
                  : currentStep === 4
                  ? "You have compleated onboarding, you can start using the eden!"
                  : ""
              }
            />
          </div>
          <div className="col col-xs-12 col-sm-8 col-md-6 pb-3">
            <div className="form-container">
              {currentStep === 1 && (
                <>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      placeholder="Steve Jobs"
                      value={onboardngData.fullName}
                      onChange={(e) =>
                        setOnboardngData({
                          ...onboardngData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <small className="form-text text-muted"></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="displayName">Display Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="displayName"
                      placeholder="Steve"
                      value={onboardngData.displayName}
                      onChange={(e) =>
                        setOnboardngData({
                          ...onboardngData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <small className="form-text text-muted"></small>
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <div className="form-group">
                    <label htmlFor="workspaceName">Workspace Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="workspaceName"
                      placeholder="Eden"
                      value={onboardngData.workspaceName}
                      onChange={(e) =>
                        setOnboardngData({
                          ...onboardngData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <small className="form-text text-muted"></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="workspaceUrl">
                      Workspace URL
                      <span className="form-text text-muted ml-1">
                        (optional)
                      </span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">www.eden.com/</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="workspaceUrl"
                        placeholder="Example"
                        value={onboardngData.workspaceUrl}
                        onChange={(e) =>
                          setOnboardngData({
                            ...onboardngData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <small className="form-text text-muted"></small>
                  </div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <div className="row mb-4">
                    <div className="col-6">
                      <div
                        className={`card ${
                          onboardngData.useWorkplaceForHimself
                            ? "card-active"
                            : ""
                        }`}
                      >
                        <div
                          className="card-body d-flex flex-column"
                          role="button"
                          onClick={() =>
                            setOnboardngData({
                              ...onboardngData,
                              useWorkplaceForHimself: true,
                            })
                          }
                        >
                          <UseWorkplaceForCard
                            icon={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="bi bi-person-fill person-icon"
                              >
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                              </svg>
                            }
                            heading="For Myself"
                            subheading="Write batter. Think more clearly. Stay organized."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className={`card ${
                          !onboardngData.useWorkplaceForHimself
                            ? "card-active"
                            : ""
                        }`}
                      >
                        <div
                          className="card-body d-flex flex-column"
                          role="button"
                          onClick={() =>
                            setOnboardngData({
                              ...onboardngData,
                              useWorkplaceForHimself: false,
                            })
                          }
                        >
                          <UseWorkplaceForCard
                            icon={
                              <svg
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128.000000 128.000000"
                                preserveAspectRatio="xMidYMid meet"
                                className="person-icon"
                              >
                                <g
                                  transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                                  fill={`${
                                    !onboardngData.useWorkplaceForHimself
                                      ? "#664de5"
                                      : "lightgray"
                                  }`}
                                  stroke="none"
                                >
                                  <path
                                    d="M561 1170 c-81 -35 -131 -105 -138 -194 -4 -53 -1 -68 24 -116 41
                                    -79 102 -115 193 -115 91 0 152 36 193 115 25 48 28 63 24 116 -5 74 -39 132
                                    -98 171 -33 22 -55 28 -108 30 -36 2 -77 -2 -90 -7z"
                                  />
                                  <path
                                    d="M211 970 c-129 -29 -169 -207 -65 -289 108 -85 266 -9 266 128 0 111
                                    -92 185 -201 161z"
                                  />
                                  <path
                                    d="M991 970 c-74 -17 -123 -81 -123 -160 0 -194 279 -226 322 -37 27
                                    120 -78 224 -199 197z"
                                  />
                                  <path
                                    d="M442 669 c-46 -23 -72 -55 -90 -108 -17 -48 -16 -433 0 -449 19 -19
                                    561 -17 577 2 9 10 11 75 9 228 -3 243 -10 269 -81 316 -39 26 -46 27 -206 30
                                    -153 2 -169 1 -209 -19z"
                                  />
                                  <path
                                    d="M165 595 c-5 -2 -22 -6 -37 -9 -39 -9 -88 -54 -109 -101 -15 -32 -19
                                    -65 -19 -168 0 -195 17 -217 172 -217 l98 0 0 219 c0 120 3 233 6 250 l7 31
                                    -54 -1 c-30 0 -58 -2 -64 -4z"
                                  />
                                  <path
                                    d="M1003 570 c4 -18 7 -131 7 -251 l0 -219 98 0 c107 0 131 9 157 60 21
                                    41 21 266 0 318 -34 80 -85 111 -193 119 l-75 6 6 -33z"
                                  />
                                </g>
                              </svg>
                            }
                            heading="With my team"
                            subheading="Wikis, docs, tasks & projects, all in one place"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <button
                className="btn btn-primary w-100 submit-button"
                onClick={() => handleStep()}
              >
                {currentStep !== totalStep ? "Create Workspace" : "Launch Eden"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoardng;
