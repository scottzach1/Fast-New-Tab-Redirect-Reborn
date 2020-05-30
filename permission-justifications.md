# Permission Justifications
> Attached are the justifications provided within this listing submission.

## Overview 

**Detailed Description**

Change the redirect page to something a little more personal.

This extension enables to user to select custom URLs to replace their default Chrome new tab page.

Although the new tab page has gotten better of these years, some (myself included) require something a little personal. This extension allows user freedom in a lightweight and snappy package. 

Privacy Policy: Regarding the permissions required to automate the new URL redirect, this extension does not and will never record any user data. 
There is no hidden communication with any external sites. 

This project is open source and I would love your input to what should be changed. You can see the entire source code for this listing at the following link:

https://github.com/scottzach1/fast-new-tab-redirect-reborn

## Permission Justification

| Permission | Justification |
|:-----------|:--------------|
| webRequest| Sadly required to intercept and modify new tab request in flight. There will be no recording of any webRequest data of the user. All source code will be available at https://github.com/scottzach1/fast-new-tab-redirect-reborn for the entire life of the extension. I would love to know if some of these permissions are not required for the same functionality. |
| webRequestBlocking | Sadly required to intercept and modify new tab request in flight. There will be no recording of any webRequest data of the user. All source code will be available at https://github.com/scottzach1/fast-new-tab-redirect-reborn for the entire life of the extension. I would love to know if some of these permissions are not required for the same functionality.
| Host Permission | The "*://*/*" is required to ensure that the background.js script is able to inject the newtab redirect script from any non-protected tab. All source code will be available at https://github.com/scottzach1/fast-new-tab-redirect-reborn for the entire life of the extension. I would love to know if some of these permissions are not required for the  same functionality. |
| Remote Code | No, I am not using remote code. |