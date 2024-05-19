import React from "react";

export const ChangePasswordProfile = () => {
  return (
    <div>
      <h2 className="text-2xl font-medium uppercase">đổi mật khẩu</h2>
      <p className="py-4">
        Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí
        tự
      </p>
      <div class="w-full bg-white  md:mt-0 sm:max-w-md">
        <form class="" action="#">
          <div className="pt-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu cũ *
            </label>
            <input
              type="password"
              name="passwordOld"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  block w-full p-2.5 focus:outline-none"
              required=""
            />
          </div>
          <div className="pt-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu mới *
            </label>
            <input
              type="password"
              name="passwordNew"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  block w-full p-2.5 focus:outline-none"
              required=""
            />
          </div>
          <div className="pt-2">
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Xác nhận lại mật khẩu *
            </label>
            <input
              type="password"
              name="passwordConfirm "
              id="confirm-password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  block w-full p-2.5 focus:outline-none"
              required=""
            />
          </div>

          <button
            type="submit"
            class="w-1/2 my-5 text-white bg-primary-600 duration-200 border hover:bg-white bg-blueDe  hover:border-blueDe hover:text-black font-bold  text-sm px-5 py-2.5 text-center"
          >
            ĐẶT LẠI MẬT KHẨU
          </button>
        </form>
      </div>
    </div>
  );
};
