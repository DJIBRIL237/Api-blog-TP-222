# Blog API

## Installation

To install the Blog API, clone the repository and install the dependencies:

```bash
git clone https://github.com/DJIBRIL237/Api-blog-TP-222.git
cd Api-blog-TP-222
npm install
```

## Usage

To start the Blog API, run:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Get All Posts
- **URL**: `/api/posts`
- **Method**: `GET`
- **Description**: Fetches all blog posts.

### Get Post by ID
- **URL**: `/api/posts/:id`
- **Method**: `GET`
- **Description**: Fetches a specific post by ID.

### Create a New Post
- **URL**: `/api/posts`
- **Method**: `POST`
- **Description**: Creates a new blog post.
- **Payload**: `{"title": "string", "content": "string"}`

### Update a Post
- **URL**: `/api/posts/:id`
- **Method**: `PUT`
- **Description**: Updates an existing post by ID.
- **Payload**: `{"title": "string", "content": "string"}`

### Delete a Post
- **URL**: `/api/posts/:id`
- **Method**: `DELETE`
- **Description**: Deletes a post by ID.

## Contribution Guidelines

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch:  `git checkout -b your-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin your-feature-branch`
5. Open a pull request.

## License
This project is licensed under the MIT License.