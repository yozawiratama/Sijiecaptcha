#Sijiecaptcha

**For now Sijie Capthca just work on client side**

##Instalation
Sijie captcha use kineticjs as core plugins, so we must add kineticjs first : 
`mrt add kinetic.js`
and copy Sijiecaptcha to your mrt project.

##How To Use
Just a simple code :
`CreateCaptcha('containerId', length);`
`containerId` is an Id of div that used for Container of catpcha.
`length` is how long captcha, ex : 7.
**Get captcha result**
`Session.get("sijiecaptcha");`

**You can follow the example, it is easy**
