# Contributing to this project

First of all, thanks for taking the time to contribute!

## Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Since the new GitHub Issue forms, we only suggest you include the most information possible. But you can also **Perform a [cursory search](https://github.com/lambeboluwatife/lbdflix/issues)** to see if the report/request has already been raised. If it has, adds a comment to the existing issue instead of opening a new one.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

### How Do I Submit A (Good) Bug Report?

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots or animated GIFs** which show you following the described steps and clearly demonstrate the problem.

## 🛠 Suggesting Enhancements

Feature requests are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a in detail description of the suggested enhancement** in as many details as possible.
- **Explain why this enhancement would be useful** to the website and the community.

## Cloning the project & creating PR

### Fork the repository.

Click on the fork button on the top of the page. This will create a copy of this repository in your account. Instead click [here](https://github.com/lambeboluwatife/lbdflix/fork) to fork the repository.

### Clone the forked repository.

```bash
 git clone https://github.com/<your-username>/lbdflix.git
```

or if use the github cli

```bash
gh repo clone <your-username>/lbdflix
```

### Navigate to the project directory.

```bash
cd lbdflix
```

### Create a new branch (naming convention: type-description-issueNo)

Kindly give your branch a more descriptive name like `docs-contributing-guide-2` instead of `patch-1`.

You could follow this convention. Some ideas to get you started:

- Feature Updates: `feat-<brief 2-3 words-Description>-<ISSUE_NO>`

- Bug Fixes: `fix-<brief 2-3 words-Description>-<ISSUE_NO>`

- Documentation: `docs-<brief 2-3 words-Description>-<ISSUE_NO>`

- And so on...

To create a new branch, use the following command:

```bash
git checkout -b your-branch-name
```

### Make the necessary changes.

### Stage your changes and commit.

```bash
git add . # Stages all the changes
git commit -m "<your_commit_message>"
```

Your commit message should be something which gives concise idea of the issue you are solving.

The commit message should be structured as follows:

```bash
<type>(optional scope): <description>
```

### Push your local commits to the remote repository.

```bash
git push origin your-branch-name
```

**8.** Create a new [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from `your-branch-name`

🎉 Congratulations! You've made your first pull request! Now, you should just wait until the maintainers review your pull request.

---

**Reference:** [4c Community Readme] (https://github.com/FrancescoXX/4c-site/blob/main/README.md)
