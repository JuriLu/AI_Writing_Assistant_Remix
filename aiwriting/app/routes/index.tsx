import { Form, Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="flex item-center justify-center min-h-screen ">
     <header className=" max-w-3x1">
         <h1 className="text-slate-100">
           This is the index page
         </h1>
         { 
         user ? (
           <div className="text-slate-200 mt-4">
             <p >Welcome {user?.email}</p>
             <Form action="/logout" method="post">
               <button 
               type="submit"
               className=" rounded bg-slate-500 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500"
                >Log Out</button>         
             </Form>      
           </div>
         ): (
           <div className="flex gap-5 text-slate-200 mt-4">
             <Link 
             className=" rounded bg-slate-500 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500"
             to='/join'>Join</Link>       
             <Link 
             className=" rounded bg-slate-500 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-500"
             to='/login'>Login</Link>       
           </div>
         )
         }
      </header>
    </div>
  );
}
