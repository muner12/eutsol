import { NextResponse } from 'next/server'
import {sessionStatus} from './app/session'

//difine all the routes in this array which you want to protect and alos define those 
//down in congfigure -> matcher:
const  protectedRoutes = ['/dashboard','/stock','/sales','/security','/administration','/stock/physical-count']
// const token = localStorage.getItem(token);

// const token = false;
export function middleware(request) {

  if (!sessionStatus) {
    if (!sessionStatus && protectedRoutes.includes(request.nextUrl.pathname)){
      const orignUrl = new URL('/login',request.url);
      return NextResponse.redirect(orignUrl.toString())
        }
      
          return NextResponse.redirect(new URL('/login', request.url))
       // return NextResponse.redirect(new URL('/dashboard', request.url))
      }
  //  if(sessionStatus){
  //    return NextResponse.redirect(new URL('/dashboard', request.url))
  //  }
       
  //  return NextResponse.redirect(new URL('/login', request.url))   
 
  
}
export const config = {
  matcher:['/','/dashboard','/stock','/sales','/security','/administration','/stock/physical-count']
}