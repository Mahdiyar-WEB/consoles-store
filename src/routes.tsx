import React from "react";

const Home = React.lazy(()=> import("./pages/Home/Home"));

interface IRoutes{
    path : string;
    element: any;
}

const routes:IRoutes[] = [
    {path:'',element: <Home/> }
];

export default routes;