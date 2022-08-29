import React, { useCallback, useEffect, useState } from "react";

import trashBlack from "./assets/trashBlack.png";
import avatar from "./assets/2222.png";
import { useNavigate } from "react-router-dom";
import API from "../../constants/api";

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
    name: "",
    surname: "",
    phoneNumber: "",
    city: "",
    address: "",
    company: "",
    email: "",
  });
  console.log(inputs, "profile");

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorText([]);
    try {
      const res = await (isEdit
        ? API.put("/user/profile", {
            first_name: inputs.name,
            last_name: inputs.surname,
            phone: valuee,
            city: inputs.city,
            address: inputs.address,
            company: inputs.company,
            email: inputs.email,
          })
        : API.post("/user/profile", {
            first_name: inputs.name,
            last_name: inputs.surname,
            phone: valuee,
            city: inputs.city,
            address: inputs.address,
            company: inputs.company,
            email: inputs.email,
          }));
      navigate("/nice");
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
    <div>
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
                <img src={avatar} alt="" className="h-32 w-32 object-cover" />
              )}
            </div>
            <div className="py-3 flex flex-row justify-center gap-2 w-auto text-sm  md:!flex-col">
              <div className="  text-[#79B15E] rounded-full ...  border-[#79B15E] flex items-center justify-center py-1 px-8 md:border ">
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
                  Изменить фото
                </span>
              </div>

              <div
                onClick={() => setImages([])}
                className="rounded-full ... gap-2 cursor-pointer  border-black flex text-[#CF1B17] items-center justify-center py-1 px-8 md:border"
              >
                <img src={trashBlack} alt="" />
                <span className="hidden md:flex">Удалить</span>
              </div>
            </div>
          </div>
          <label className="block">
            <input
              placeholder="Имя"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
            <input
              value={inputs.surname}
              placeholder="Фамилия"
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
              Адрес
            </span>
            <input
              value={inputs.city}
              placeholder="Город"
              type="text"
              name="city"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
            <input
              value={inputs.address}
              placeholder="Адрес"
              type="text"
              name="address"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
            <input
              value={inputs.company}
              placeholder="Компания"
              type="text"
              name="company"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border-2 border-black text-sm  font-light placeholder-[#101010]
              rounded-full ... focus:outline-none border-solid"
            />
          </label>
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
            {isEdit ? "Изменить" : "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileComponent;
