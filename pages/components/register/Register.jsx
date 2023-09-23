import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loading-icons";
import colors from "../../../utils/colors";
import CHeader from "../contact/CHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Register() {
  const [showAlert, setShowAlert] = useState(false);
  const [options, setOptions] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [teamname, setTeamname] = useState("");
  const [category, setCategory] = useState(0);
  const [groupsize, setGroupSize] = useState(0);
  const [topic, setTopic] = useState("");
  const [accepted, setAccepted] = useState(false);

  let [submitting, setSubmitting] = useState(false);
  let [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      let request = await fetch(
        "https://backend.getlinked.ai/hackathon/categories-list",
        {
          method: "GET",
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      if (request.ok) {
        await request.json().then((data) => setOptions(data));
      }
    } catch (e) {
      toast.error(e, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (accepted) {
      console.log(email, phone, groupsize, topic, category);
      if (
        email.length > 0 &&
        phone >= 10 &&
        groupsize > 0 &&
        topic.length > 0 &&
        category != 0
      ) {
        try {
          const formdata = {
            email: email,
            phone_number: phone,
            team_name: teamname,
            group_size: groupsize,
            project_topic: topic,
            category: category,
            privacy_poclicy_accepted: accepted,
          };
          let request = await fetch(
            "https://backend.getlinked.ai/hackathon/registration",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formdata),
            }
          );
          if (request.ok) {
            setShowAlert(true);
            setSubmitting(false);
            setShowConfetti(true);
          } else {
            setSubmitting(false);
            await request.json().then((data) => {
              toast.error(`Data already exist or something weird happened!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            });
          }
        } catch (e) {
          toast.error(`${e}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setSubmitting(false);
        }
      } else {
        setSubmitting(false);
        toast.warning("Inputted data not correct", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      setSubmitting(false);
      toast.warning("Please accept our terms and conditions to continue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const { width, height } = useWindowSize();

  return (
    <RegisterMainContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {showConfetti && <Confetti width={width} height={height} />}
      {showAlert && (
        <OverlayAlert>
          <div className="flex--body">
            <div className="container">
              <div className="star--container">
                <img
                  src="/images/register/alert-star.svg"
                  alt=""
                  className="star"
                />
              </div>
              <div className="img--container">
                <img
                  src="/images/register/congrats.svg"
                  alt=""
                  className="congrats"
                />
              </div>
              <h1>
                Congratulations
                <br />
                you have successfully Registered!
              </h1>
              <p>
                Yes, it was easy and you did it! check your mail box for next
                step
                <img src="/images/register/emoji.svg" alt="emoji" />
              </p>
              <button
                onClick={() => {
                  setShowAlert(false), setShowConfetti(false);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </OverlayAlert>
      )}
      <div className="view--controller">
        <CHeader />
      </div>

      <Body>
        <section className="desc--container">
          <img src="/images/register/3d-men.svg" alt="3d-men" />
        </section>

        <section className="mobile-gradient">
          <img src="/images/register/mobile-gradient.svg" alt="" />
        </section>

        <FormContainer>
          <h1>Register</h1>
          <section className="mobile-3d">
            <img src="/images/register/small-3d-men.svg" alt="" />
          </section>

          <div className="movement">
            <p>
              Be part of this movement!
              <span className="movement-img">
                <img src="/images/register/movement.svg" alt="" />
              </span>
            </p>
            <h2>CREATE YOUR ACCOUNT</h2>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inputContainer">
              <label htmlFor="teamname">Team’s Name</label>
              <input
                type="text"
                name="teamname"
                id="#"
                placeholder="Enter the name of your group"
                onChange={(e) => setTeamname(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="#"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="#"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="topic">Project Topic</label>
              <input
                type="text"
                name="topic"
                id="#"
                placeholder="What is your group project topic"
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                placeholder="Select"
                onClick={(e) => {
                  let value = e.target.value;
                  setCategory(
                    value == "MOBILE"
                      ? 1
                      : value == "WEB"
                      ? 2
                      : value == "UI/UX"
                      ? 3
                      : 0
                  );
                }}
                required
              >
                <option value="Select" defaultChecked>
                  Select
                </option>
                {options.length > 0 &&
                  options.map((e, index) => {
                    return (
                      <option key={index} value={e.name}>
                        {e.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div>
              <label htmlFor="groupsize">Group Size</label>
              <input
                type="number"
                name="groupsize"
                id="#"
                placeholder="Group size"
                required
                onChange={(e) => setGroupSize(e.target.value)}
              />
            </div>
          </form>
          <p className="warning">
            Please review your registration details before submitting
          </p>
          <div className="checkbox">
            <input
              type="checkbox"
              name=""
              id=""
              onClick={(e) => {
                setAccepted(e.target.checked), console.log(e.target.checked);
              }}
              required
            />
            <p>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            {!submitting && <span>Submit</span>}
            {submitting && <TailSpin fontSize={8}></TailSpin>}
          </button>
        </FormContainer>
      </Body>
      {/* <div className="gradient--2">
        <img src="/images/register/gradient-2.svg" alt="gradient" />
      </div> */}
    </RegisterMainContainer>
  );
}

const RegisterMainContainer = styled.div`
  width: 100vw;
  height: auto;
  padding-bottom: 9.188rem;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: 992px) {
    padding-bottom: 1.5rem;
  }
  div.gradient--2 {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      object-fit: cover;
      opacity: 0.7;
      transform: translateY(10px);
    }
  }
  .view--controller {
    @media screen and (max-width: 993px) {
      display: none;
    }
  }
`;

const Body = styled.section`
  padding-inline-start: 0rem;
  padding-inline-end: 8rem;
  display: flex;
  margin-top: 9.8125rem;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  height: auto;
  @media screen and (max-width: 1400px) {
    margin-top: 0rem;
    padding-inline-start: 0;
    padding-inline-end: 3rem;
  }

  @media screen and (max-width: 992px) {
    padding-inline: 3.063rem;
  }
  section.desc--container {
    width: 50%;
    display: flex;
    align-items: start;
    img {
      transform: translate(-100px, -100px);
      @media screen and (max-width: 992px) {
        width: 12.188rem;
        height: 9.688rem;
      }
    }
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  section.mobile-gradient {
    position: absolute;
    left: 0;
    top: 0;
    @media screen and (min-width: 993px) {
      display: none;
    }
  }
`;

const FormContainer = styled.section`
  width: 50%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-inline: 5.625rem;
  padding-top: 75px;
  padding-bottom: 4.188rem;
  margin-top: 6rem;
  position: relative;
  @media screen and (max-width: 1400px) {
    padding-top: 2.813rem;
    padding-bottom: 3.5rem;
    padding-inline: 3rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    background-color: transparent;
    padding: 0;
    padding-inline: 0.188rem;
    box-shadow: none;
  }
  section.mobile-3d {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    @media screen and (min-width: 993px) {
      display: none;
    }
    /* img {
      width: 12.188rem;
      height: 9.688rem;
      flex-shrink: 0;
    } */
  }

  h1 {
    color: ${colors.pink};
    font-family: "ClashDisplay";
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 992px) {
      font-size: 0.938rem;
    }
  }
  div.movement {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: normal;
    color: #fff;
    margin-top: 2.875rem;
    @media screen and (max-width: 992px) {
      margin-top: 1.438rem;
    }
    p {
      span.movement-img {
        display: inline-block;
        transform: translate(2px, 1px);
      }
    }
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
      margin-top: 1.188rem;
    }
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    column-gap: 3.5rem;
    margin-top: 34px;
    align-items: center;
    @media screen and (max-width: 1400px) {
      column-gap: 1.875rem;
      row-gap: 1.875rem;
    }
    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
      row-gap: 1.125rem;
      column-gap: 0;
      margin-top: 1.438rem;
    }
    div {
      input,
      select {
        width: 100%;
        height: 2.938rem;
        border-radius: 4px;
        border: 1px solid #fff;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-inline: 26px;
        margin-top: 11px;
        z-index: 1;

        &::placeholder {
          color: rgba(255, 255, 255, 0.25);
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
        }
        option {
          color: black;
        }
      }
      label {
        color: #fff;
        font-family: Montserrat;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  button {
    width: 100%;
    height: 3.313rem;
    border-radius: 4px;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    border: 0;
    margin-top: 1.375rem;
  }
  p.warning {
    color: #ff26b9;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.438rem;
  }
  div.checkbox {
    display: flex;
    column-gap: 10px;
    margin-top: 1rem;
    p {
      color: #fff;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const OverlayAlert = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #150e28e8;
  z-index: 999999999999;
  position: absolute;
  display: absolute;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    padding-inline: 3.5rem;
  }
  div.flex--body {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  div.container {
    padding-inline: 3.375rem;
    padding-top: 2rem;
    padding-bottom: 4.563rem;
    border-radius: 5px;
    border: 1px solid #d434fe;
    background: rgba(255, 255, 255, 0.01);
    @media screen and (max-width: 1400px) {
      padding-bottom: 2rem;
      padding-inline: 2.5rem;
      padding-top: 1rem;
    }
    @media screen and (max-width: 992px) {
      width: 100%;
    }
    div.star--container {
      position: absolute;
      right: 0;
      top: 18%;
      right: 10%;
      img {
        width: 1.5rem;
        height: 1.5rem;
        object-fit: contain;
      }
    }
    div.img--container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img.congrats {
        @media screen and (max-width: 992px) {
          width: 10rem;
          height: 8rem;
        }
      }
    }
    h1 {
      color: #fff;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      line-height: normal;
      @media screen and (max-width: 992px) {
        font-size: 1rem;
        margin-top: 1.625rem;
      }
    }
    p {
      width: 50%;
      color: #fff;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
      margin-top: 0.938rem;
      margin-inline: auto;
      @media screen and (max-width: 992px) {
        font-size: 0.75rem;
        width: 100%;
      }
      img {
        width: 1.25rem;
        height: 1.25rem;
        transform: translate(5px, 4px);
      }
    }
    button {
      border-radius: 4px;
      margin-top: 2.25rem;
      background: linear-gradient(
        270deg,
        #903aff 0%,
        #d434fe 56.42%,
        #ff26b9 99.99%,
        #fe34b9 100%
      );
      width: 100%;
      height: 3.313rem;
      border: 0;
    }
  }
`;
export default Register;
