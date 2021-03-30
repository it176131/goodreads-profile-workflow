# Goodreads profile workflow

Automatically update your README with what you're currently reading—or any other Goodreads reading shelf of yours.

![goodreads-github-profile-update-v1](https://user-images.githubusercontent.com/1093032/112973602-d3662f80-9151-11eb-9a94-6c05eadba362.png)

### How to use
- Go to your repository
- Add the following section to your **README.md** file, you can give whatever title you want. Just make sure that you use `<!-- GOODREADS-LIST:START --><!-- GOODREADS-LIST:END -->` in your readme. The workflow will replace this comment with the actual list of currently reading books: 

```markdown
### Books I'm currently reading
<!-- GOODREADS-LIST:START -->
<!-- GOODREADS-LIST:END -->
```

- Create a folder named `.github` and create a `workflows` folder inside it if it doesn't exist.
- Create a new file named `goodreads-profile-workflow.yml` with the following contents inside the workflows folder:

```yaml
name: Latest book list from a goodreads
on:
  schedule: # Run workflow automatically
    # This will make it run every hour
    - cron: "0 * * * *"
    # Run workflow manually (without waiting for the cron to be called), through the Github Actions Workflow page directly
  workflow_dispatch:
jobs:
  update-readme-with-goodreads-books:
    name: Update this repo's README with what you're currently reading
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: zwacky/goodreads-profile-workflow@main
        with:
          # Replace this with your goodreads user id
          goodreads_user_id: "92930971"
          shelf: "currently-reading"
```

- Replace the above `goodreads_user_id` with yours. To find out your user ID go to "My Books" on Goodreads and you'll see it in the URL.
- Commit and wait for it to run automatically or you can also trigger it manually to see the result instantly. To trigger the workflow manually check out [this blog post](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/) by GitHub.

### Inputs

Here are all the inputs you can change in your goodreads-profile-workflow.yml file under `steps[*].with`:

| Option | Default Value | Description | Required |
|--------|--------|--------|--------|
| `goodreads_user_id` | "" | The Goodreads account ID to fetch the books from. | Yes |
| `shelf` | "currently-reading" | The Goodreads shelf/list the books are in (default shelves: currently-reading, read, to-read) | No |
| `max_books_count` | "10" | Max count of books that will be taken from the shelf/list | No |
| `readme_file_path` | "./README.md" | Path of the readme file you want to update | No |
| `output_only` | "false" | Sets the generated array as `books` [output variable](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs) so that it can be consumed in other actions | No |
| `output_only` | "false" | Sets the generated array as `books` [output variable](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs) so that it can be consumed in other actions | No |

### More resources
- Check out gautamkrishnar's [blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow) for another great update readme workflow
