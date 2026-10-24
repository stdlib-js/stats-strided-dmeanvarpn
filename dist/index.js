"use strict";var d=function(a,n){return function(){try{return n||a((n={exports:{}}).exports,n),n.exports}catch(i){throw (n=0, i)}};};var j=d(function(L,R){
var k=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function z(a,n,i,q,s,r,v,N){var f,m,e,l,c,y,u,p,x;if(m=s,e=N,a<=0)return r[e]=NaN,r[e+v]=NaN,r;if(p=a-n,a===1||q===0)return r[e]=i[m],p<=0?r[e+v]=NaN:r[e+v]=0,r;if(f=o(a,i,q,s)/a,k(f))return r[e]=NaN,r[e+v]=NaN,r;for(l=0,c=0,x=0;x<a;x++)y=i[m]-f,l+=y*y,c+=y,m+=q;return u=c/a,r[e]=f+u,p<=0?r[e+v]=NaN:r[e+v]=l/p-u*(c/p),r}R.exports=z
});var w=d(function(P,_){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=j();function C(a,n,i,q,s,r){var v=A(a,q),N=r>=0?0:-r;return B(a,n,i,q,v,s,r,N),s}_.exports=C
});var g=d(function(Q,b){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=w(),F=j();D(E,"ndarray",F);b.exports=E
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=g(),M,h=H(G(__dirname,"./native.js"));I(h)?M=J:M=h;module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
