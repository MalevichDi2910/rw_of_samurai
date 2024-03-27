import * as React from "react"
import {SVGProps, Ref, forwardRef, memo} from "react"
import s from './ErrorPage.module.css'
export const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <div className={s.errorWrapper}><svg
        xmlns="http://www.w3.org/2000/svg"
        width={451}
        height={192}
        fill="none"
        ref={ref}
        {...props}
    >
        <path
            fill="url(#a)"
            d="M296.1 16v16.2H193.4V2.1h-73.5v173.4h73.5l181.5 1.1V16h-78.8Z"
        />
        <path
            fill="#fff"
            d="M356.3 26.9h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2ZM356.3 36.5h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2ZM356.3 46.1h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2ZM356.3 55.7h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2ZM356.3 65.3h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2ZM356.3 75h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2ZM134.6 11.2h-6.3v6.3h6.3v-6.3ZM147.3 11.2H141v6.3h6.3v-6.3ZM160.1 11.2h-6.3v6.3h6.3v-6.3ZM172.8 11.2h-6.3v6.3h6.3v-6.3ZM134.6 26.9h-6.3v6.3h6.3v-6.3ZM147.3 26.9H141v6.3h6.3v-6.3ZM160.1 26.9h-6.3v6.3h6.3v-6.3ZM172.8 26.9h-6.3v6.3h6.3v-6.3ZM134.6 42.6h-6.3v6.3h6.3v-6.3ZM147.3 42.6H141v6.3h6.3v-6.3ZM160.1 42.6h-6.3v6.3h6.3v-6.3ZM172.8 42.6h-6.3v6.3h6.3v-6.3Z"
        />
        <path
            fill="#A280FF"
            d="M255 139.7c-5.2 11.2-12.3 11.2-14.6 11.2-5.6 0-10.3-3.5-13.8-10.5-4.3-8.4-6.5-21-6.5-36.5v-.6h-29.7v.4c.2 21.9 4.7 40.2 13.1 52.8 8.7 13.1 21.1 20 35.9 20 16.3 0 29.6-7.1 38.5-20.4 8.3-12.6 12.6-30.4 12.8-52.8H261c-.1 15.6-2.2 28.2-6 36.4Z"
        />
        <path
            fill="#A280FF"
            d="M291.9 50.2C283.3 37 270.6 30.1 255 30.1c-15.4 0-28.3 6.9-37.5 20-9 12.8-13.7 31.2-13.8 53.2h29.7c.1-15.7 2.4-28.5 6.8-37 3.6-7 8.3-10.6 13.7-10.6 7.6 0 20.4 6.1 20.4 47v.6H304v-1.4c.1-21.8-4-39.3-12.1-51.7ZM405.1 110.9h-12.2V30.1h-28.1l-1.8 2.6-58 83.1-1.1 1.6v19.5h60.4v35.4h28.6v-35.4h18.2v-26h-6Zm-65.9 0L364.3 76v34.9h-25.1Z"
        />
        <path
            fill="#8C9EA5"
            d="M72.4 172.5c-.9 0-1.8-.7-1.9-1.7L51.7 3.7c-.1-1 .6-2 1.7-2.1 1-.1 2 .6 2.1 1.7l18.8 167.1c.1 1-.6 2-1.7 2.1h-.2ZM123.4 172.5c-.9 0-1.8-.7-1.9-1.7L102.7 3.7c-.1-1 .6-2 1.7-2.1 1-.1 2 .6 2.1 1.7l18.8 167.1c.1 1-.6 2-1.7 2.1h-.2Z"
        />
        <path
            fill="#8C9EA5"
            d="M106.5 22.8h-51c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h51c1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9ZM107.6 39.4H57.7c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h49.9c1 0 1.9.8 1.9 1.9 0 1.1-.9 1.9-1.9 1.9ZM108.7 56H59.8c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h48.9c1 0 1.9.8 1.9 1.9-.1 1-.9 1.9-1.9 1.9ZM112.1 72.6H62c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h50.1c1 0 1.9.8 1.9 1.9 0 1-.8 1.9-1.9 1.9ZM114 89.2H63.6c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9H114c1 0 1.9.8 1.9 1.9 0 1-.9 1.9-1.9 1.9ZM115.9 105.7H65.4c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h50.5c1 0 1.9.8 1.9 1.9 0 1.1-.9 1.9-1.9 1.9Z"
        />
        <path
            fill="#B0BEC5"
            d="M104.9 7H50.1c-1.9 0-3.5-1.6-3.5-3.5S48.2 0 50.1 0h54.8c1.9 0 3.5 1.6 3.5 3.5S106.9 7 104.9 7Z"
        />
        <path
            fill="#B0BEC5"
            d="M83.4 172.5h-.2c-1-.1-1.8-1-1.7-2.1L100.3 3.3c.1-1 1-1.8 2.1-1.7 1 .1 1.8 1 1.7 2.1L85.3 170.8c-.1 1-.9 1.7-1.9 1.7ZM32.4 172.5h-.2c-1-.1-1.8-1-1.7-2.1L49.3 3.3c.1-1 1-1.8 2.1-1.7 1 .1 1.8 1 1.7 2.1L34.3 170.8c-.1 1-.9 1.7-1.9 1.7Z"
        />
        <path
            fill="#B0BEC5"
            d="M100.3 22.8h-51c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h51c1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9ZM98.2 39.4H48.3c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h49.9c1 0 1.9.8 1.9 1.9 0 1.1-.9 1.9-1.9 1.9ZM96.1 56H47.2c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h48.9c1 0 1.9.8 1.9 1.9-.1 1-.9 1.9-1.9 1.9ZM93.9 72.6H43.8c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h50.1c1 0 1.9.8 1.9 1.9-.1 1-.9 1.9-1.9 1.9ZM92.3 89.2H41.9c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h50.4c1 0 1.9.8 1.9 1.9 0 1-.9 1.9-1.9 1.9ZM90.5 105.7H40c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9h50.5c1 0 1.9.8 1.9 1.9-.1 1.1-.9 1.9-1.9 1.9Z"
        />
        <path
            fill="#A280FF"
            d="m137.7 124.7 62.4-41.2 5-3.3-3.3-5-10.5-15.9-1.7-2.6-3.1-.1-101.3-2.7-1.9-.1-1.6 1-9.7 6.4-5 3.3 3.3 5 30 45.4-24.5 16.2-5 3.3 3.3 5 9.2 13.9 3.3 5 5-3.3 24.5-16.2 6.7 10.2 3.3 5 5-3.3 11.5-7.6 5-3.3-3.3-5-6.6-10.1Zm-29.6-44.9 42.9 1.7-29.1 19.2-13.8-20.9Z"
        />
        <path
            fill="#B0BEC5"
            d="M49.8 150.7c-8.6 0-15.6 7-15.6 15.6s7 15.6 15.6 15.6h131.8v-31.2H49.8Z"
        />
        <path
            fill="url(#b)"
            d="M49.8 150.7c-8.6 0-15.6 7-15.6 15.6s7 15.6 15.6 15.6h131.8v-31.2H49.8Z"
        />
        <path
            fill="#CFD8DC"
            d="M187.53 180.743c7.973-3.266 11.788-12.377 8.522-20.35-3.266-7.973-12.377-11.788-20.35-8.522-7.973 3.266-11.789 12.377-8.522 20.35 3.266 7.973 12.377 11.788 20.35 8.522Z"
        />
        <path
            fill="#B0BEC5"
            d="M181.6 177.5c6.186 0 11.2-5.014 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2-6.186 0-11.2 5.014-11.2 11.2 0 6.186 5.014 11.2 11.2 11.2Z"
        />
        <path
            fill="url(#c)"
            d="M181.6 177.5c6.186 0 11.2-5.014 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2-6.186 0-11.2 5.014-11.2 11.2 0 6.186 5.014 11.2 11.2 11.2Z"
        />
        <path
            fill="#B0BEC5"
            d="M33 123c-8.6 0-15.6 7-15.6 15.6s7 15.6 15.6 15.6h131.8V123H33Z"
        />
        <path
            fill="url(#d)"
            d="M33 123c-8.6 0-15.6 7-15.6 15.6s7 15.6 15.6 15.6h131.8V123H33Z"
        />
        <path
            fill="#CFD8DC"
            d="M175.855 149.635c6.092-6.093 6.092-15.97 0-22.062-6.092-6.092-15.97-6.092-22.062 0-6.092 6.092-6.092 15.969 0 22.062 6.092 6.092 15.97 6.092 22.062 0Z"
        />
        <path
            fill="#B0BEC5"
            d="M164.8 149.8c6.186 0 11.2-5.014 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2-6.186 0-11.2 5.014-11.2 11.2 0 6.186 5.014 11.2 11.2 11.2Z"
        />
        <path
            fill="url(#e)"
            d="M164.8 149.8c6.186 0 11.2-5.014 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2-6.186 0-11.2 5.014-11.2 11.2 0 6.186 5.014 11.2 11.2 11.2Z"
        />
        <path
            fill="#B0BEC5"
            d="M15.6 150.7c-8.6 0-15.6 7-15.6 15.6s7 15.6 15.6 15.6h131.8v-31.2H15.6Z"
        />
        <path
            fill="#CFD8DC"
            d="M153.473 180.708c7.935-3.357 11.646-12.51 8.29-20.445-3.357-7.935-12.511-11.647-20.446-8.29-7.935 3.356-11.646 12.51-8.29 20.445 3.357 7.935 12.511 11.647 20.446 8.29Z"
        />
        <path
            fill="#B0BEC5"
            d="M147.4 177.5c6.186 0 11.2-5.015 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2-6.186 0-11.2 5.014-11.2 11.2 0 6.185 5.014 11.2 11.2 11.2Z"
        />
        <path
            fill="url(#f)"
            d="M147.4 177.5c6.186 0 11.2-5.015 11.2-11.2 0-6.186-5.014-11.2-11.2-11.2-6.186 0-11.2 5.014-11.2 11.2 0 6.185 5.014 11.2 11.2 11.2Z"
        />
        <path
            fill="#CFD8DC"
            d="M259.6 176.4c-6 0-8.9-7.5-4.3-11.4.7-.6 1.5-1.1 2.3-1.5 3.3-1.7 7.2-1.8 10.7-.5 2.2.8 4.7.3 6.5-1.2 2.6-2.3 6.2-3.6 9.8-3.7 3.4-.1 6.7.7 10 1.7 2.6.9 5.6-.1 7.2-2.3 7-9.6 18.4-15.7 30.2-17.8 7.1-1.3 14.7-1.3 21.4 1.3 5.1 2 9.6 5.6 12.4 10.2 1.4 2.3 4.1 3.5 6.8 3 5.1-1 10.9.9 14.5 4.7 2.1 2.2 5.3 2.8 7.9 1.4 2.3-1.3 4.8-2.2 7.5-2.3 3-.1 6.2 1.2 8.2 3.4 1.6 1.8 4 2.5 6.4 2.1 1.8-.3 3.7 0 5.3.9 0 0 .1 0 .1.1 5.7 3.3 3.2 12-3.4 12l-159.5-.1Z"
        />
        <path
            fill="url(#g)"
            d="M259.6 176.4c-6 0-8.9-7.5-4.3-11.4.7-.6 1.5-1.1 2.3-1.5 3.3-1.7 7.2-1.8 10.7-.5 2.2.8 4.7.3 6.5-1.2 2.6-2.3 6.2-3.6 9.8-3.7 3.4-.1 6.7.7 10 1.7 2.6.9 5.6-.1 7.2-2.3 7-9.6 18.4-15.7 30.2-17.8 7.1-1.3 14.7-1.3 21.4 1.3 5.1 2 9.6 5.6 12.4 10.2 1.4 2.3 4.1 3.5 6.8 3 5.1-1 10.9.9 14.5 4.7 2.1 2.2 5.3 2.8 7.9 1.4 2.3-1.3 4.8-2.2 7.5-2.3 3-.1 6.2 1.2 8.2 3.4 1.6 1.8 4 2.5 6.4 2.1 1.8-.3 3.7 0 5.3.9 0 0 .1 0 .1.1 5.7 3.3 3.2 12-3.4 12l-159.5-.1Z"
        />
        <path
            fill="#455A64"
            d="M429 169.6H249.5c-1.5 0-2.7 1.2-2.7 2.7v7c0 1.5 1.2 2.7 2.7 2.7H429c1.5 0 2.7-1.2 2.7-2.7v-7c0-1.5-1.2-2.7-2.7-2.7Z"
        />
        <path
            fill="#37474F"
            d="m28.127 113.194-7.5.014.147 78.8 7.5-.014-.148-78.8Z"
        />
        <path
            fill="#37474F"
            d="M15.3 188.7v.9c0 1.3 1.1 2.4 2.4 2.4h13.8c1.3 0 2.4-1.1 2.4-2.4v-.9H15.3Z"
        />
        <path fill="#455A64" d="M28.4 185.1h-7.6l-5.5 3.6H34l-5.6-3.6Z" />
        <path
            fill="url(#h)"
            d="m28.4 185.1-.2-71.9h-2.8l.2 71.9 2.7 3.6v.9c0 1.3-1.1 2.4-2.4 2.4h5.7c1.3 0 2.4-1.1 2.4-2.4v-.9l-5.6-3.6Z"
        />
        <path
            fill="#E53935"
            d="M33.5 104.1c0-5-4.1-9.1-9.1-9.1s-9.1 4.1-9.1 9.1 4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1Z"
        />
        <path
            fill="url(#i)"
            d="M24.4 113.2c5 0 9.1-4.1 9.1-9.1 0-1.6-.4-3.1-1.2-4.4L20 112c1.3.7 2.8 1.2 4.4 1.2Z"
        />
        <path
            fill="#37474F"
            d="m444.23 115.594-7.3.013.142 75.7 7.3-.014-.142-75.699Z"
        />
        <path
            fill="#37474F"
            d="M431.6 188v.8c0 1.3 1.1 2.4 2.4 2.4h13.4c1.3 0 2.4-1.1 2.4-2.4v-.8h-18.2Z"
        />
        <path fill="#455A64" d="M444.4 184.5H437l-5.4 3.5h18.2l-5.4-3.5Z" />
        <path
            fill="url(#j)"
            d="m444.4 184.5-.2-68.9h-2.7l.2 68.9 2.6 3.5v.8c0 1.3-1.1 2.4-2.4 2.4h5.5c1.3 0 2.4-1.1 2.4-2.4v-.8l-5.4-3.5Z"
        />
        <path
            fill="#E53935"
            d="M449.3 106.8c0-4.9-4-8.8-8.8-8.8-4.9 0-8.8 4-8.8 8.8 0 4.9 4 8.8 8.8 8.8 4.9 0 8.8-4 8.8-8.8Z"
        />
        <path
            fill="url(#k)"
            d="M440.5 115.6c4.9 0 8.8-4 8.8-8.8 0-1.6-.4-3-1.1-4.3l-12 12c1.3.7 2.7 1.1 4.3 1.1Z"
        />
        <path
            fill="#fff"
            d="M439.3 102.5c0 .9-.7 1.7-1.7 1.7s-1.7-.7-1.7-1.7c0-.9.7-1.7 1.7-1.7.9 0 1.7.7 1.7 1.7Z"
            opacity={0.5}
        />
        <path
            fill="#F5D100"
            d="m450.885 115.593-436.8.815.031 16.5 436.8-.815-.031-16.5Z"
        />
        <path
            fill="#263238"
            d="m32.9 116.4-16.5 16.5h-2.3v-9.4l7.2-7.1h11.6ZM54.8 116.3l-16.5 16.6H26.7l16.4-16.6h11.7ZM76.7 116.3l-16.5 16.5H48.5L65 116.3h11.7ZM98.6 116.2l-16.5 16.6H70.4l16.5-16.5 11.7-.1ZM120.5 116.2 104 132.7l-11.7.1 16.5-16.6h11.7ZM142.3 116.2l-16.4 16.5h-11.7l16.5-16.5h11.6ZM164.2 116.1l-16.4 16.6h-11.7l16.5-16.6h11.6ZM186.1 116.1l-16.5 16.5H158l16.4-16.5h11.7ZM208 116l-16.5 16.6h-11.7l16.5-16.6H208ZM229.9 116l-16.5 16.5-11.7.1 16.5-16.6h11.7ZM251.8 115.9l-16.5 16.6h-11.7l16.5-16.5 11.7-.1ZM273.7 115.9l-16.5 16.5-11.7.1 16.5-16.6h11.7ZM295.5 115.9l-16.4 16.5h-11.7l16.5-16.5h11.6ZM317.4 115.8l-16.5 16.6h-11.6l16.5-16.6h11.6ZM339.3 115.8l-16.5 16.5h-11.6l16.4-16.5h11.7ZM361.2 115.7l-16.5 16.6H333l16.5-16.5 11.7-.1ZM383.1 115.7l-16.5 16.5-11.7.1 16.5-16.6h11.7ZM405 115.7l-16.5 16.5h-11.7l16.5-16.5H405ZM426.9 115.6l-16.5 16.6h-11.7l16.5-16.6h11.7ZM448.7 115.6l-16.4 16.5h-11.7l16.5-16.5h11.6ZM450.9 123.6l.1 8.5h-8.5l8.4-8.5Z"
        />
        <path fill="url(#l)" d="m14.1 132.9 436.9-.8-.1-8.4-436.8.8v8.4Z" />
        <defs>
            <linearGradient
                id="a"
                x1={247.383}
                x2={247.383}
                y1={175.173}
                y2={-74.331}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#D6D7F4" />
            </linearGradient>
            <linearGradient
                id="b"
                x1={107.921}
                x2={107.921}
                y1={140.702}
                y2={173.465}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#B0BEC5" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={209.646}
                x2={169.165}
                y1={166.312}
                y2={166.312}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#B0BEC5" />
            </linearGradient>
            <linearGradient
                id="d"
                x1={91.127}
                x2={91.127}
                y1={121.13}
                y2={160.386}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#B0BEC5" />
            </linearGradient>
            <linearGradient
                id="e"
                x1={192.852}
                x2={152.371}
                y1={138.568}
                y2={138.568}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#B0BEC5" />
            </linearGradient>
            <linearGradient
                id="f"
                x1={175.476}
                x2={134.995}
                y1={166.312}
                y2={166.312}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#B0BEC5" />
            </linearGradient>
            <linearGradient
                id="g"
                x1={356.633}
                x2={311.003}
                y1={149.525}
                y2={203.114}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#B0BEC5" />
            </linearGradient>
            <linearGradient
                id="h"
                x1={4.696}
                x2={66.643}
                y1={143.134}
                y2={169.324}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} />
            </linearGradient>
            <linearGradient
                id="i"
                x1={26.701}
                x2={26.736}
                y1={96.225}
                y2={114.744}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} />
            </linearGradient>
            <linearGradient
                id="j"
                x1={421.68}
                x2={481.244}
                y1={144.325}
                y2={169.506}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} />
            </linearGradient>
            <linearGradient
                id="k"
                x1={442.731}
                x2={442.765}
                y1={99.147}
                y2={117.114}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} />
            </linearGradient>
            <linearGradient
                id="l"
                x1={144.5}
                x2={279.12}
                y1={4.896}
                y2={193.6}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.001} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} />
            </linearGradient>
        </defs>
    </svg>
        <span className={s.text}>Sorry! Page not found!</span>
    </div>
)

export const ErrorPage = memo(forwardRef(SvgComponent))
// const ForwardRef = forwardRef(SvgComponent)
// const Memo = memo(ForwardRef)
// export default Memo
