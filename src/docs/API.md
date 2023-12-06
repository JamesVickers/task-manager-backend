# Task Management API

## Create a Task

- **URL**
  - `POST /tasks/create/task`
  - `http://localhost:8888/tasks/create/task`

- **Description**
  - Creates a new task.

- **Request Parameters**
  - `assignee` (string): Person assigned to the task.
  - `description` (string): Description of the task.
  - `priority` (number): Priority level of the task.

- **Access**
  - PUBLIC

---

## Get All Tasks

- **URL**
  - `GET /tasks/get/all`
  - `http://localhost:8888/tasks/get/all`

- **Description**
  - Retrieves all tasks.

- **Request Parameters**
  - None

- **Access**
  - PUBLIC

---

## Update a Task by ID

- **URL**
  - `PUT /tasks/update/task`
  - `http://localhost:1337/tasks/update/task`

- **Description**
  - Updates a task identified by its ID.

- **Request Parameters**
  - `id` (string): ID of the task to be updated.
  - `assignee` (string): New assignee of the task.
  - `description` (string): New description of the task.
  - `priority` (number): New priority level of the task.

- **Access**
  - PUBLIC

---

## Delete a Task

- **URL**
  - `DELETE /tasks/delete/task`
  - `http://localhost:1337/tasks/delete/task`

- **Description**
  - Deletes a specific task by its ID.

- **Request Parameters**
  - `id` (string): ID of the task to be deleted.

- **Access**
  - PUBLIC

---

## Delete Multiple Tasks

- **URL**
  - `DELETE /tasks/delete/tasks`
  - `http://localhost:1337/tasks/delete/tasks`

- **Description**
  - Deletes multiple tasks by their IDs.

- **Request Parameters**
  - `id` (array of strings): IDs of the tasks to be deleted.

- **Access**
  - PUBLIC
