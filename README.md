# Worfix UI Starter - For use with Frappe Only

This template should help get you started developing custom frontend for Frappe
apps with Vue 3 and the Frappe UI package.

![Auth](https://github.com/1byZero/worfix/blob/74da63ca364393818ec6d06eb514ea04afeaa583/src/assets/images/worfix.png)

![Dashboard](https://github.com/1byZero/worfix/blob/74da63ca364393818ec6d06eb514ea04afeaa583/src/assets/images/worfix_d.png)

This boilerplate sets up Vue 3, Vue Router, TailwindCSS, and Frappe UI out of
the box. It also has basic authentication frontend.

## Usage

This template is meant to be cloned inside an existing Frappe App. Assuming your
apps name is `worfux`. Clone this template in the root folder of your app using `git clone`.

```
cd apps/worfux
git clone https://github.com/1byZero/worfix.git
cd worfix
yarn
yarn dev
```

In a development environment, you need to put the below key-value pair in your `site_config.json` file:

```
"ignore_csrf": 1
```

This will prevent `CSRFToken` errors while using the vite dev server. In production environment, the `csrf_token` is attached to the `window` object in `index.html` for you.

The Vite dev server will start on the port `8080`. This can be changed from `vite.config.js`.
The development server is configured to proxy your frappe app (usually running on port `8000`). If you have a site named `worfux.local`, open `http://worfux.local:8080` in your browser. If you see a button named "Click to send 'ping' request", congratulations!

If you notice the browser URL is `/`, this is the base URL where your frontend app will run in production.
To change this, open `src/router.js` and change the base URL passed to `createWebHistory`.

## Resources

- [Vue 3](https://v3.vuejs.org/guide/introduction.html)
- [Vue Router](https://next.router.vuejs.org/guide/)
- [Frappe UI](https://github.com/frappe/frappe-ui)
- [TailwindCSS](https://tailwindcss.com/docs/utility-first)
- [Vite](https://vitejs.dev/guide/)
