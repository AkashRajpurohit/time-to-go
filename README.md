<br />
<p align="center">
  <a href="https://github.com/AkashRajpurohit/time-to-go">
    <img src="https://media.tenor.com/ZKkv01LQFbIAAAAC/kermit-the-frog-drive.gif" alt="Its go time" width="200" height="130" />
  </a>

  <h3 align="center">Time To Go!</h3>

  <p align="center">
    <samp>Simplify and Supercharge Your Links!</samp>
    <br />
    <br />
    <a href="https://github.com/AkashRajpurohit/time-to-go/issues/new?template=bug_report.md">Bug report</a>
    ·
    <a href="https://github.com/AkashRajpurohit/time-to-go/issues/new?template=feature_request.md">Feature request</a>
		<br />
		<br />
		<a href="https://workers.cloudflare.com/">
    	<img alt="Deployed via Cloudflare Workers" src="https://img.shields.io/badge/Deployed%20via-Cloudflare%20Workers-%23FAAD3F" />
  	</a>
		<a href="https://www.cloudflare.com/products/workers-kv/">
    	<img alt="Data storage via Workers KV" src="https://img.shields.io/badge/Storage%20via-Workers%20KV-%23FAAD3F" />
  	</a>
		<img alt="Visitors count" src="https://visitor-badge.laobi.icu/badge?page_id=@akashrajpurohit~time-to-go.visitor-badge&style=flat-square&color=0088cc" />
		<a href="https://twitter.com/akashwhocodes">
    	<img alt="follow on twitter" src="https://img.shields.io/twitter/follow/akashwhocodes.svg?style=social&label=@akashwhocodes" />
  	</a>
		<a href="https://github.com/AkashRajpurohit/time-to-go">
			<img alt="GitHub" src="https://img.shields.io/github/license/AkashRajpurohit/time-to-go" />
		</a>
  </p>
</p>

Time to Go is a utility service built on top of Cloudflare Workers that allows you share Go URLs.

> Read more about Go URLs by visiting this Go URL https://go.akashrajpurohit.com/b/go-urls

# Motivation 💪

Have you ever wanted to share a long and complex URL with others, only to find it difficult to remember or share? Time to Go solves this problem by providing you with the ability to create short, personalized Go URLs that are easy to remember and share.

Whether you're sharing a link on social media or including it in a presentation, Time to Go simplifies the process and makes it more convenient for you and your audience.

# Self Hosting Guide 📖

To self-host Time to Go, follow these steps:

## Prerequisites 🏃🏻

- Account with [Cloudflare](https://dash.cloudflare.com/sign-up). Everything required for this is available on Free plan as well.
- [Node.js](https://nodejs.org/) installed on your machine if you want to run it locally first.
- [PNPM](https://pnpm.io/) - The package manager used.

## KV Setup 📦

To store the URL data, Time to Go utilizes Cloudflare's Key-Value (KV) store. Follow these steps to set up KV:

1. Create a KV namespace in your Cloudflare account.
2. Note down the generated KV namespace ID.

We will use the UI for KV to add/update go-urls. Simple add a key (the short code) and value as the actual URL and click on "Add Entry"

Go ahead and take some time to add some GO URLs for yourself.

## Environment Variables 👀

Before deploying Time to Go, make sure to set the following environment variables:

### For Github Actions ⛏

_All of the tokens mentioned in this section are required._

- `CF_API_TOKEN`: Your Cloudflare API token. Create the API tokens from [here](https://dash.cloudflare.com/profile/api-tokens)
- `CF_ACCOUNT_ID`: The ID of the Cloudflare zone where you want to deploy Time to Go.

### For Cloudflare Worker 👷🏼‍♂️

- `NOT_FOUND_REDIRECT_URL` - This would be the URL where you want to re-direct a user when there is no go-url configured for incoming request.

	If this is not set then the service will just return a 404 response.
- `REFERRER_TEXT` - If set, this will get attached to the go-url as a `ref` key in the url.

	For example if `REFERRER_TEXT=my-ref` and the URL is `https://example.com` it will be redirected to `https://example.com?ref=my-ref`

## Deployment 🚀

To deploy Time to Go, follow these steps:

1. [Fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your own GitHub account.
2. Add the environment variables for the forked repository from the Github Actions section.
3. Clone the forked repository to your local machine.
4. Navigate to the repository directory.
5. Install the dependencies by running the command: `pnpm install`.
6. Edit the `wrangler.toml` file and update the values for `kv_namespaces` with the KV id we created earlier for both `id` and `preview_id`.
7. Update the `vars` section to add the environment variables from the Cloudflare worker section.
8. Commit your changes and push them to your forked repository.
9. GitHub Actions will automatically trigger the deployment process. Wait for the action to complete.

Congratulations! Time to Go is now deployed and ready to use.

# Technology Stack 💻

- Framework - [Hono](https://honojs.dev/)
- Deployment - [Cloudflare Workers](https://workers.cloudflare.com/)
- Storage - [Workers KV](https://www.cloudflare.com/products/workers-kv/)

# Bugs or Requests 🐛

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/time-to-go/issues/new?template=bug_report.md). If you feel the project is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/time-to-go/issues/new?template=feature_request.md) on GitHub and I'll look into it. Pull requests are also welcome.

# Where to find me? 👀

[![Website Badge](https://img.shields.io/badge/-akashrajpurohit.com-3b5998?logo=google-chrome&logoColor=white)](https://akashrajpurohit.com/)
[![Twitter Badge](https://img.shields.io/badge/-@akashwhocodes-00acee?logo=Twitter&logoColor=white)](https://twitter.com/AkashWhoCodes)
[![Linkedin Badge](https://img.shields.io/badge/-@AkashRajpurohit-0e76a8?logo=Linkedin&logoColor=white)](https://linkedin.com/in/AkashRajpurohit)
[![Instagram Badge](https://img.shields.io/badge/-@akashwho.codes-e4405f?logo=Instagram&logoColor=white)](https://instagram.com/akashwho.codes/)
[![Telegram Badge](https://img.shields.io/badge/-@AkashRajpurohit-0088cc?logo=Telegram&logoColor=white)](https://t.me/AkashRajpurohit)