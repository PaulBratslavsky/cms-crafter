"use client";

import Image from "next/image";

import trophy from "/public/images/trophy.png";

const FunFacts = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-[#EF4335] relative rounded-[20px] p-[30px] sm:p-[40px]">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            <div 
              className="bg-[#FEE] text-center rounded-[20px] py-[50px] px-[30px]"

              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={trophy} alt="trophy" className="mx-auto" />

              <h3 className="text-black font-medium text-[18px]">
                Award Winning Agency
              </h3>
            </div>

            <div 
              className="lg:pl-[40px] rtl:lg:pl-0 rtl:lg:pr-[40px] text-center xl:text-left xl:rtl:text-right relative before:content-[''] before:absolute before:right-0 rtl:before:right-auto rtl:before:left-0 before:bg-[#ECECEC] before:h-[85px] before:w-[1px] before:rotate-[25deg] before:top-[30%] before:hidden xl:before:block last-of-type:before:hidden"

              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="bg-[#FEE] w-[84px] h-[84px] mx-auto xl:mx-0 leading-[84px] rounded-full text-center mb-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M22.036 13.2327C19.9195 13.2327 17.8504 13.8603 16.0906 15.0362C14.3307 16.2121 12.9591 17.8835 12.1491 19.8389C11.3391 21.7944 11.1272 23.9461 11.5401 26.022C11.953 28.0979 12.9723 30.0047 14.4689 31.5014C15.9655 32.998 17.8724 34.0172 19.9483 34.4302C22.0242 34.8431 24.1759 34.6312 26.1313 33.8212C28.0868 33.0112 29.7582 31.6396 30.9341 29.8797C32.11 28.1198 32.7376 26.0508 32.7376 23.9342C32.7338 21.0972 31.6052 18.3774 29.599 16.3712C27.5929 14.3651 24.8731 13.2364 22.036 13.2327ZM22.7392 29.0038V29.7772C22.7392 29.9637 22.6651 30.1425 22.5332 30.2744C22.4014 30.4062 22.2225 30.4803 22.036 30.4803C21.8496 30.4803 21.6707 30.4062 21.5389 30.2744C21.407 30.1425 21.3329 29.9637 21.3329 29.7772V28.9967C20.8645 28.9263 20.416 28.7585 20.0164 28.5042C19.6168 28.2498 19.2748 27.9146 19.0126 27.5202C18.9155 27.3626 18.8846 27.1731 18.9266 26.9929C18.9687 26.8127 19.0802 26.6563 19.237 26.558C19.3938 26.4597 19.5831 26.4273 19.7636 26.4679C19.9441 26.5085 20.1013 26.6189 20.2009 26.7749C20.4111 27.0612 20.6883 27.2917 21.0082 27.4462C21.3281 27.6006 21.681 27.6743 22.036 27.6608C23.9508 27.6608 24.9439 25.7346 23.0204 24.8342C22.6071 24.6374 21.1357 24.6354 20.3204 24.2436C17.5838 22.8753 18.298 19.4073 21.3329 18.8717V18.0913C21.3329 17.9048 21.407 17.7259 21.5389 17.5941C21.6707 17.4622 21.8496 17.3881 22.036 17.3881C22.2225 17.3881 22.4014 17.4622 22.5332 17.5941C22.6651 17.7259 22.7392 17.9048 22.7392 18.0913V18.8717C23.1978 18.9426 23.6374 19.1055 24.0313 19.3509C24.4253 19.5962 24.7654 19.9187 25.0314 20.2991C25.1312 20.4548 25.1656 20.6436 25.1272 20.8245C25.0888 21.0054 24.9806 21.1639 24.8262 21.2656C24.6717 21.3674 24.4834 21.4042 24.302 21.368C24.1206 21.3319 23.9608 21.2257 23.8571 21.0725C23.6442 20.7944 23.3677 20.5714 23.0509 20.4222C22.734 20.2729 22.386 20.2018 22.036 20.2147C20.1053 20.2147 19.2129 22.1217 20.9462 22.978C21.4289 23.2193 22.8173 23.1886 23.6181 23.5616C26.5455 24.9539 25.7966 28.4503 22.7392 29.0038Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M20.254 5.46905L16.6986 3.1602C16.5422 3.06068 16.3528 3.02696 16.1716 3.06637C15.9904 3.10579 15.8322 3.21515 15.7312 3.37067C15.6303 3.52618 15.5949 3.71526 15.6327 3.89677C15.6704 4.07828 15.7784 4.23752 15.933 4.33986L17.9995 5.68173C14.0908 6.58532 10.6063 8.79289 8.11959 11.941C5.63289 15.0891 4.29224 18.9902 4.31837 23.0019C4.31973 23.1883 4.39512 23.3666 4.52795 23.4975C4.66078 23.6284 4.84016 23.7012 5.02664 23.6998C5.21312 23.6985 5.39142 23.6231 5.52232 23.4902C5.65321 23.3574 5.72598 23.178 5.72462 22.9916C5.70064 19.285 6.94451 15.6817 9.2499 12.7792C11.5553 9.87676 14.7836 7.84966 18.3994 7.03417L16.9725 9.23152C16.8731 9.38794 16.8394 9.5773 16.8789 9.75841C16.9183 9.93953 17.0276 10.0977 17.1831 10.1987C17.3386 10.2996 17.5276 10.335 17.7091 10.2973C17.8906 10.2595 18.0498 10.1517 18.1522 9.99713L20.4611 6.44168C20.5554 6.28328 20.5865 6.09512 20.5481 5.9148C20.5097 5.73449 20.4047 5.57529 20.254 5.46905Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M30.2008 36.9105C27.003 38.7849 23.2604 39.5096 19.5941 38.9643C15.9277 38.419 12.5581 36.6364 10.0442 33.9125L12.6604 34.0496C12.8451 34.0567 13.0251 33.9908 13.1615 33.8662C13.2979 33.7415 13.3798 33.5683 13.3895 33.3837C13.3991 33.1992 13.3358 33.0183 13.2131 32.8802C13.0904 32.742 12.9183 32.6577 12.7339 32.6454L8.5004 32.4236C8.31534 32.4183 8.13533 32.4845 7.99775 32.6084C7.86017 32.7323 7.77559 32.9044 7.76157 33.089L7.53978 37.3225C7.53004 37.5087 7.59466 37.6912 7.71944 37.8297C7.84422 37.9683 8.01893 38.0516 8.20514 38.0613C8.39134 38.0711 8.57379 38.0065 8.71235 37.8817C8.85091 37.7569 8.93423 37.5822 8.94397 37.396L9.07294 34.9353C11.8098 37.8685 15.4638 39.7824 19.4335 40.3618C23.4031 40.9412 27.4518 40.1517 30.9128 38.1231C31.0725 38.0281 31.188 37.8738 31.2343 37.6939C31.2805 37.514 31.2536 37.3231 31.1596 37.1629C31.0655 37.0027 30.9119 36.8863 30.7322 36.839C30.5526 36.7917 30.3615 36.8174 30.2008 36.9105Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M41.0659 26.9202L38.8705 28.0388C40.0422 24.202 39.8725 20.0807 38.3895 16.3532C36.9065 12.6257 34.1985 9.51423 30.7113 7.53103C30.5492 7.44059 30.358 7.41789 30.1792 7.46789C30.0005 7.51788 29.8488 7.63651 29.7572 7.79791C29.6656 7.95931 29.6415 8.15039 29.6902 8.32948C29.7388 8.50857 29.8564 8.66115 30.0171 8.75394C33.2389 10.5865 35.7375 13.4653 37.0984 16.913C38.4593 20.3606 38.6007 24.1699 37.4992 27.709L36.3099 25.3749C36.2243 25.2103 36.0771 25.0862 35.9004 25.0296C35.7238 24.973 35.5319 24.9885 35.3666 25.0727C35.2013 25.157 35.076 25.3031 35.018 25.4793C34.9599 25.6555 34.9739 25.8475 35.0567 26.0135L36.9814 29.7907C37.0673 29.9557 37.2145 30.0804 37.3914 30.1379C37.5684 30.1954 37.7608 30.181 37.9272 30.098L41.7045 28.1733C41.869 28.0877 41.993 27.9405 42.0495 27.7639C42.106 27.5873 42.0905 27.3955 42.0063 27.2302C41.9221 27.065 41.776 26.9397 41.5999 26.8816C41.4238 26.8236 41.2319 26.8374 41.0659 26.9202Z"
                    fill="#EF4335"
                  />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-[25px] md:text-[32px] lg:text-[36px]">
                350+
              </h3>

              <p className="text-white">Happy Clients</p>
            </div>

            <div 
              className="lg:pl-[40px] rtl:lg:pl-0 rtl:lg:pr-[40px] text-center xl:text-left xl:rtl:text-right relative before:content-[''] before:absolute before:right-0 rtl:before:right-auto rtl:before:left-0 before:bg-[#ECECEC] before:h-[85px] before:w-[1px] before:rotate-[25deg] before:top-[30%] before:hidden xl:before:block last-of-type:before:hidden"

              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="bg-[#FEE] w-[84px] h-[84px] mx-auto xl:mx-0 leading-[84px] rounded-full text-center mb-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M32.2557 18.5224C30.4295 14.4186 24.8519 6.21276 20.0184 8.34534C19.7046 8.54095 19.4182 8.77768 19.1671 9.04924L9.87183 21.9797C10.3359 22.1127 10.7388 22.4037 11.0109 22.8024C11.0461 22.8516 15.2156 30.157 15.2296 30.2133C15.4322 30.6511 15.477 31.1455 15.3562 31.6125L31.2257 30.2274C35.0057 29.3248 34.6978 24.1297 32.2557 18.5224ZM24.0435 10.2703C29.2198 13.2467 35.2492 25.8962 31.5631 28.6314C30.0281 29.5024 26.6728 27.5194 23.7228 23.326C21.7181 20.5413 19.9533 16.4987 19.6751 13.6021C19.2172 9.82963 20.9145 8.20306 24.0435 10.2703Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M13.9921 31.275C14.0424 31.0955 14.0197 30.9034 13.9288 30.7406L9.8929 23.6531C9.84722 23.5732 9.78624 23.5031 9.71345 23.4468C9.64066 23.3904 9.55749 23.349 9.46868 23.3249C9.37988 23.3007 9.28718 23.2943 9.19589 23.306C9.10461 23.3176 9.01651 23.3472 8.93665 23.3929L5.23118 25.5023C-0.175146 28.8178 4.38532 36.7586 9.9633 33.8061L13.6617 31.6968C13.7422 31.6522 13.8129 31.5919 13.8697 31.5194C13.9264 31.4469 13.9681 31.3638 13.9921 31.275Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M14.6812 32.6953C14.4755 32.8716 11.741 34.4157 11.1726 34.7414L14.4773 38.8125C14.8146 39.2223 15.3006 39.4817 15.8288 39.534C16.357 39.5862 16.8844 39.427 17.2955 39.0912C17.7066 38.7555 17.9678 38.2705 18.0221 37.7425C18.0764 37.2145 17.9192 36.6865 17.585 36.2742L14.6812 32.6953Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M34.7908 14.8789C34.6356 14.879 34.4847 14.8278 34.3616 14.7332C34.2386 14.6387 34.1503 14.506 34.1104 14.356C34.0706 14.206 34.0816 14.047 34.1415 13.9039C34.2015 13.7608 34.3071 13.6415 34.442 13.5646L38.6525 11.1679C38.8146 11.0756 39.0067 11.0514 39.1866 11.1007C39.3665 11.15 39.5194 11.2688 39.6117 11.4309C39.7041 11.593 39.7282 11.7851 39.6789 11.965C39.6296 12.1449 39.5108 12.2978 39.3488 12.3901L35.1382 14.7868C35.0324 14.8472 34.9126 14.8789 34.7908 14.8789Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M31.7484 10.9173C31.6218 10.9172 31.4976 10.8829 31.3889 10.818C31.2802 10.7532 31.191 10.6602 31.1307 10.5489C31.0704 10.4376 31.0413 10.3121 31.0465 10.1856C31.0516 10.0591 31.0908 9.93639 31.1599 9.83033L33.8049 5.77122C33.9067 5.61497 34.0664 5.50556 34.2488 5.46706C34.4313 5.42855 34.6216 5.46411 34.7778 5.56591C34.9341 5.66771 35.0435 5.82741 35.082 6.00988C35.1205 6.19235 35.085 6.38264 34.9832 6.53889L32.3382 10.598C32.2743 10.6963 32.1869 10.7769 32.0839 10.8327C31.9809 10.8885 31.8655 10.9176 31.7484 10.9173Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M36.6428 19.5161C36.4592 19.5154 36.2832 19.443 36.1523 19.3144C36.0214 19.1857 35.9461 19.0109 35.9423 18.8274C35.9385 18.6439 36.0067 18.4662 36.1322 18.3322C36.2577 18.1983 36.4306 18.1187 36.6139 18.1105L41.4548 17.909C41.6405 17.9036 41.821 17.9709 41.9577 18.0967C42.0945 18.2225 42.1766 18.3967 42.1867 18.5823C42.1906 18.6745 42.1763 18.7666 42.1446 18.8533C42.1129 18.94 42.0644 19.0196 42.0019 19.0875C41.9394 19.1555 41.8641 19.2104 41.7804 19.2493C41.6966 19.2881 41.6061 19.3101 41.5138 19.3139L36.673 19.5154L36.6428 19.5161Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M26.4029 22.1226C26.2476 22.1228 26.0967 22.0716 25.9736 21.977C25.8505 21.8824 25.7621 21.7498 25.7223 21.5998C25.6825 21.4497 25.6935 21.2907 25.7535 21.1476C25.8135 21.0044 25.9191 20.8851 26.054 20.8083L26.6418 20.4736C26.8258 20.3698 26.9874 20.2305 27.1171 20.0637C27.2467 19.8969 27.3419 19.7059 27.3971 19.502C27.48 19.1969 27.4706 18.874 27.3702 18.5742C27.2697 18.2745 27.0826 18.0112 26.8325 17.8177C26.5825 17.6242 26.2807 17.5091 25.9653 17.4871C25.6499 17.465 25.335 17.5369 25.0605 17.6937L24.4713 18.0284C24.3092 18.1206 24.1172 18.1446 23.9374 18.0951C23.7577 18.0457 23.6049 17.9268 23.5128 17.7648C23.4206 17.6027 23.3966 17.4106 23.4461 17.2309C23.4955 17.0511 23.6144 16.8984 23.7764 16.8062L24.3649 16.4715C24.708 16.2754 25.0864 16.1489 25.4784 16.0993C25.8704 16.0496 26.2684 16.0777 26.6495 16.1821C27.0306 16.2864 27.3874 16.4648 27.6995 16.7072C28.0116 16.9496 28.2728 17.2511 28.4682 17.5946C28.6637 17.938 28.7894 18.3167 28.8383 18.7088C28.8873 19.1009 28.8584 19.4988 28.7533 19.8797C28.6483 20.2607 28.4692 20.6171 28.2262 20.9288C27.9832 21.2404 27.6812 21.501 27.3374 21.6958L26.7503 22.0305C26.6444 22.0909 26.5247 22.1226 26.4029 22.1226Z"
                    fill="#EF4335"
                  />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-[25px] md:text-[32px] lg:text-[36px]">
                3.5 billion
              </h3>

              <p className="text-white">Social Impressions</p>
            </div>

            <div 
              className="lg:pl-[40px] rtl:lg:pl-0 rtl:lg:pr-[40px] text-center xl:text-left xl:rtl:text-right relative before:content-[''] before:absolute before:right-0 rtl:before:right-auto rtl:before:left-0 before:bg-[#ECECEC] before:h-[85px] before:w-[1px] before:rotate-[25deg] before:top-[30%] before:hidden xl:before:block last-of-type:before:hidden"

              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="bg-[#FEE] w-[84px] h-[84px] mx-auto xl:mx-0 leading-[84px] rounded-full text-center mb-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M20.0001 11.8726C11.4186 11.8726 4.7644 21.3227 4.7644 29.4522C4.7644 38.9069 13.4604 40 20.0001 40C26.5398 40 35.2358 38.907 35.2358 29.4522C35.2358 21.3227 28.5816 11.8726 20.0001 11.8726ZM21.2041 31.5844C21.1935 31.5882 21.1826 31.5864 21.1721 31.5901V32.968C21.1721 33.6158 20.6478 34.14 20.0001 34.14C19.3524 34.14 18.8282 33.6158 18.8282 32.968V31.5819C18.0556 31.3213 17.3155 30.8267 16.6834 30.0736C16.2668 29.5779 16.3309 28.8387 16.8276 28.422C17.3221 28.0054 18.0614 28.0684 18.478 28.5651C20.7888 31.3251 22.3486 27.1081 20.0002 27.1081C18.0614 27.1081 16.4842 25.5309 16.4842 23.5922C16.4842 22.1897 17.2871 20.8525 18.8282 20.304V18.9042C18.8282 18.2564 19.3525 17.7322 20.0002 17.7322C20.648 17.7322 21.1721 18.2565 21.1721 18.9042V20.3078C21.7789 20.5122 22.3706 20.837 22.8981 21.3477C23.3628 21.7986 23.3765 22.5403 22.9256 23.005C22.4747 23.4708 21.733 23.4833 21.2683 23.0325C19.1124 20.9498 17.6562 24.7641 20.0003 24.7641C21.939 24.7641 23.5162 26.3413 23.5162 28.2801C23.516 29.752 22.5867 31.0808 21.2041 31.5844Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M26.6839 0.94418C22.3577 -0.314727 17.6423 -0.314727 13.316 0.94418C12.5901 1.15426 12.2435 1.99715 12.6339 2.66324L14.4066 5.83668C17.4889 4.61019 22.0608 4.42707 25.593 5.83723L27.366 2.66324C27.7563 1.99715 27.4098 1.15434 26.6839 0.94418Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M25.4416 8.39099C23.2487 6.84614 16.8162 6.78169 14.5448 8.39817C13.571 9.0856 13.0526 10.1656 13.0626 11.2938C15.3131 10.1016 17.9519 9.52856 20 9.52856C22.4946 9.52856 24.8314 10.1781 26.9375 11.2938C26.9472 10.2068 26.4641 9.11208 25.4416 8.39099Z"
                    fill="#EF4335"
                  />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-[25px] md:text-[32px] lg:text-[36px]">
                5* rated
              </h3>

              <p className="text-white">Accross the board</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
