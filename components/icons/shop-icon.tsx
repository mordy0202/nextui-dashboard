import React from 'react';
import {Svg} from '../styles/svg';

export const ShopIcon = () => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         css={{
            '& path': {
               fill: '$blue700',
            },
         }}
      >
         <Svg.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4895 6.66448C21.0925 6.19609 20.5155 5.92669 19.9085 5.92669H9.16377C8.74978 5.92669 8.41378 6.26956 8.41378 6.69203C8.41378 7.11451 8.74978 7.45738 9.16377 7.45738H19.9085C20.1435 7.45738 20.2895 7.588 20.3555 7.66556C20.4215 7.74413 20.5275 7.91047 20.4935 8.14721L19.5445 14.8404C19.4695 15.365 19.0215 15.7609 18.5015 15.7609H7.59081C7.03782 15.7609 6.58683 15.3374 6.54083 14.7761L5.57786 3.06939C5.54986 2.72243 5.29486 2.43772 4.95887 2.37854L2.87792 2.01015C2.46493 1.9428 2.08094 2.2173 2.01095 2.63467C1.94095 3.05102 2.21394 3.44696 2.62193 3.51942L4.13189 3.78576L5.04587 14.9037C5.15787 16.265 6.25184 17.2916 7.59081 17.2916H18.5015C19.7625 17.2916 20.8485 16.3323 21.0285 15.0598L21.9784 8.36661C22.0654 7.7523 21.8864 7.13287 21.4895 6.66448ZM5.90795 20.455C5.90795 19.6029 6.58793 18.909 7.42291 18.909C8.25789 18.909 8.93687 19.6029 8.93687 20.455C8.93687 21.3071 8.25789 22 7.42291 22C6.58793 22 5.90795 21.3071 5.90795 20.455ZM17.1607 20.455C17.1607 19.6029 17.8396 18.909 18.6746 18.909C19.5096 18.909 20.1896 19.6029 20.1896 20.455C20.1896 21.3071 19.5096 22 18.6746 22C17.8396 22 17.1607 21.3071 17.1607 20.455ZM17.6488 10.4643C17.6488 10.8868 17.3128 11.2296 16.8988 11.2296H14.1258C13.7109 11.2296 13.3759 10.8868 13.3759 10.4643C13.3759 10.0418 13.7109 9.69893 14.1258 9.69893H16.8988C17.3128 9.69893 17.6488 10.0418 17.6488 10.4643Z"
            fill="#200E32"
         />
      </Svg>
   );
};
