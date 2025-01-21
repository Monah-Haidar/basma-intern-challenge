import SearchBar from "./SearchBar";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-24 py-8 ">
      <div className="p-10 flex sm:flex-col sm:justify-between sm:gap-y-8 lg:flex-row lg:gap-x-24 bg-gray-200">


        <div className="hidden sm:grid sm:gap-4 sm:grid-cols-3 gap-x-8">
          <div className="flex flex-col gap-y-1">
            <h4 className="mb-1 text-end font-bold">بما تتطلبه</h4>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="mb-1 text-end font-bold">بما تتطلبه</h4>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="mb-1 text-end font-bold">بما تتطلبه</h4>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
            <p className="font-bold text-sm underline text-gray-500 text-end">
              هناك حقيقة مثبتة منذ
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-10 mx-auto lg:mx-0">
          <h4 className="text-end font-bold text-gray-700">مشاهدة على تويتر</h4>
          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-y-0 sm:gap-x-10">
            <SearchBar />
            <div className="flex gap-x-2 ">
              <span className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  //   width="6"
                  //   height="6"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#4CAF50"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    // style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  //   width="100"
                  //   height="100"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    // style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path
                        d="M24,4c-11.046,0 -20,8.954 -20,20c0,11.046 8.954,20 20,20c11.046,0 20,-8.954 20,-20c0,-11.046 -8.954,-20 -20,-20z"
                        fill="#4caf50"
                      ></path>
                      <path
                        d="M36,17.12c-0.882,0.391 -1.999,0.758 -3,0.88c1.018,-0.604 2.633,-1.862 3,-3c-0.951,0.559 -2.671,1.156 -3.793,1.372c-2.418,-2.564 -8.207,-1.617 -8.207,3.628v2c-4,0 -7.9,-3.047 -10.327,-6c-2.254,3.807 1.858,6.689 2.327,7c-0.807,-0.025 -2.335,-0.641 -3,-1c0,0.016 0,0.036 0,0.057c0,2.367 1.661,3.974 3.912,4.422c-0.411,0.113 -0.912,0.521 -2.84,0.521c0.626,1.935 3.773,2.958 5.928,3c-2.617,2.029 -7.126,2.079 -8,1.977c8.989,5.289 22.669,0.513 21.982,-12.477c0.968,-0.682 1.36,-1.396 2.018,-2.38"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  //   width="100"
                  //   height="100"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    // style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path
                        d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z"
                        fill="#4caf50"
                      ></path>
                      <path
                        d="M30,37v-10.099c0,-1.689 -0.819,-2.698 -2.192,-2.698c-0.815,0 -1.414,0.459 -1.779,1.364c-0.017,0.064 -0.041,0.325 -0.031,1.114l0.002,10.319h-7v-19h7v1.061c1.022,-0.705 2.275,-1.061 3.738,-1.061c4.547,0 7.261,3.093 7.261,8.274l0.001,10.726zM11,37v-19h3.457c-2.003,0 -3.457,-1.472 -3.457,-3.501c0,-2.027 1.478,-3.499 3.514,-3.499c2.012,0 3.445,1.431 3.486,3.479c0,2.044 -1.479,3.521 -3.515,3.521h3.515v19z"
                        fill="#000000"
                        opacity="0.05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0,-1.973 -1.031,-3.198 -2.692,-3.198c-1.295,0 -1.935,0.912 -2.243,1.677c-0.082,0.199 -0.071,0.989 -0.067,1.326l0.002,9.794h-6v-18h6v1.638c0.795,-0.823 2.075,-1.638 4.238,-1.638c4.233,0 6.761,2.906 6.761,7.774l0.001,10.226zM11.5,36.5v-18h6v18zM14.457,17.5c-1.713,0 -2.957,-1.262 -2.957,-3.001c0,-1.738 1.268,-2.999 3.014,-2.999c1.724,0 2.951,1.229 2.986,2.989c0,1.749 -1.268,3.011 -3.015,3.011z"
                        fill="#000000"
                        opacity="0.07"
                      ></path>
                      <path
                        d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4 mt-5 text-green-500 font-semibold">Copyright © 2025 Basma.com </div>
    </footer>
  );
}
