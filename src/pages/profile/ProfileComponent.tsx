import React, { useCallback, useEffect, useState } from "react";

import trashBlack from "./assets/trashBlack.png";
import defaultAvatar from "./assets/2222.png";
import { useNavigate } from "react-router-dom";
import API from "../../constants/api";

import nice from "./assets/nice.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ImageObj {
  blobUrl: string;
  file: File;
}

const ProfileComponent = () => {
  const [valuee, setValue] = useState("");
  const [errorText, setErrorText] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [images, setImages] = React.useState<ImageObj[]>([]);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    avatar: "",
    name: "",
    surname: "",
    phoneNumber: "",
    city: "",
    address: "",
    company: "",
    email: "",
  });
  console.log(inputs, "profile");

  const [successfully, setSuccessfully] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSelectImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const max = 10;
      const files = Array.from(e.target.files || []).slice(0, max);

      setImages(
        files.map((file) => ({
          file,
          blobUrl: URL.createObjectURL(new Blob([file])),
        }))
      );
    },
    []
  );
  console.log(images[0]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorText([]);
    const avatar = new FormData();
    images.length > 0 && avatar.append("avatar", images[0].file);
    if (!inputs.avatar) {
      avatar.append("avatar", "");
    }

    avatar.append("first_name", inputs.name);
    avatar.append("last_name", inputs.surname);
    avatar.append("phone", valuee);
    avatar.append("city", inputs.city);
    avatar.append("address", inputs.address);
    avatar.append("company", inputs.company);
    avatar.append("email", inputs.email);
    try {
      const res = await (isEdit
        ? API.put("/user/profile", avatar, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        : API.post("/user/profile", avatar, {
            headers: { "Content-Type": "multipart/form-data" },
          }));
    } catch (e) {
      // @ts-ignore
      setErrorText([Object.entries(e.response.data)]);
    }
  };

  useEffect(() => {
    API.get("/user/profile")
      .then((res) => {
        setInputs({
          name: res.data.data.first_name,
          surname: res.data.data.last_name,
          phoneNumber: "",
          city: res.data.data.city,
          address: res.data.data.address,
          company: res.data.data.company,
          email: res.data.data.email,
          avatar: res.data.data.avatar ? res.data.data.avatar : defaultAvatar,
        });
        setIsEdit(true);
        setValue(res.data.data.phone);
      })
      .catch((e) => setIsEdit(false));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    console.log(params);
    if (isEdit) {
      navigate("/profile?isEdit=true");
      return;
    }
    navigate("/profile?isEdit=false");
  }, [isEdit]);

  return (
    <>
      <div className="flex justify-center   w-auto md:w-32 lg:w-48 ">
        <form onSubmit={handleSubmit} className="w-96">
          <div className="flex justify-between py-5 flex-col md:flex-row md:items-center ">
            <div className=" flex justify-center items-center">
              {images.length ? (
                <img
                  src={images[0].blobUrl}
                  alt=""
                  className="w-32 h-32 flex justify-center rounded-full object-cover"
                />
              ) : (
                <img
                  src={inputs.avatar ? inputs.avatar : defaultAvatar}
                  alt=""
                  className="h-32 w-32 object-cover"
                />
              )}
            </div>
            <div className="py-3 flex flex-row justify-center gap-2 w-auto text-sm  md:!flex-col">
              <div className="  text-[#79B15E] rounded-full ...  border-[#79B15E] flex items-center justify-center py-1 px-8 md:border border-[1px] ">
                <input
                  onChange={(e) => onSelectImage(e)}
                  accept="image/*"
                  type="file"
                  className="hidden border border-black"
                  id="input_file"
                />
                <span
                  onClick={() => document.getElementById("input_file")?.click()}
                  className="flex justify-center items-center cursor-pointer border-black font-normal"
                >
                  ???????????????? ????????
                </span>
              </div>

              <div
                onClick={() => {
                  setImages([]);
                  setInputs({ ...inputs, avatar: "" });
                }}
                className="rounded-full ... gap-2 cursor-pointer  border-black flex text-[#CF1B17] items-center justify-center py-1 px-8 md:border"
              >
                <img src={trashBlack} alt="" />
                <span className="hidden md:flex">??????????????</span>
              </div>
            </div>
          </div>
          <label className="block ">
            <input
              placeholder="??????"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
            <input
              value={inputs.surname}
              placeholder="??????????????"
              name="surname"
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid
              "
            />

            <div className="w-full">
              <PhoneInput
                value={valuee}
                onChange={(e: string) => {
                  setValue(e);
                }}
                country={"kg"}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  onchange: { handleChange },
                }}
                inputClass="transparent"
              />
            </div>
            <input
              value={inputs.email}
              placeholder="email"
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />

            <span className="text-black font-bold flex justify-center">
              ??????????
            </span>
            <input
              value={inputs.city}
              placeholder="??????????"
              type="text"
              name="city"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
            <input
              value={inputs.address}
              placeholder="??????????"
              type="text"
              name="address"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
            <input
              value={inputs.company}
              placeholder="????????????????"
              type="text"
              name="company"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
          </label>

          {successfully ? (
            <>
              <div className="bg-[#343434] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="bg-[#343434] h-1"></div>

                <div className="flex justify-center items-center flex-col gap-5">
                  <label htmlFor=""></label>
                  <img src={nice} alt="" />
                  <p className="text-white">???? ?????????????? ????????????????????????????????????</p>
                  <button
                    onClick={() => navigate("/")}
                    className="focus:outline-none rounded-full bg-white px-3 py-2  flex justify-center items-center"
                  >
                    ????????????
                  </button>
                </div>
                <div className="bg-white h-1"></div>
              </div>
            </>
          ) : null}

          <div className="text-red-800 ">
            {
              //@ts-ignore
              errorText.length ? errorText[0].map((err) => err[1]) : null
            }
          </div>
          <button
            type="submit"
            className="bg-[#1F1F1F] rounded-full ...  flex justify-center w-[100%] py-2 text-white gap-2"
          >
            {isEdit ? "????????????????" : "??????????????????"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileComponent;
