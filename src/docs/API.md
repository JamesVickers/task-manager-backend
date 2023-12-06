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
  - `priority` (string): Priority level of the task.

- **Return Values**
  - `201 Created` on success:
    ```json
    {
        "message": "Task created successfully.",
        "task": {
            // Task object details
        }
    }
    ```
  - `500 Internal Server Error` on failure:
    ```json
    {
        "message": "Error message describing the issue.",
        "error": { /* Error details */ }
    }
    ```

---

## Get All Tasks

- **URL**
  - `GET /tasks/get/all`
  - `http://localhost:8888/tasks/get/all`

- **Description**
  - Retrieves all tasks.

- **Return Values**
  - `200 OK` on success:
    ```json
    {
        "message": "Tasks retrieved successfully.",
        "count": 5,
        "tasks": [
            // Array of task objects
        ]
    }
    ```
  - `500 Internal Server Error` on failure:
    ```json
    {
        "message": "Error message describing the issue.",
        "error": { /* Error details */ }
    }
    ```

---

## Update a Task by ID

- **URL**
  - `PUT /tasks/update/task`
  - `http://localhost:1337/tasks/update/task`

- **Description**
  - Updates a task identified by its ID.

- **Request Parameters**
  - `id` (string): ID of the task to be updated.
  - `assignee` (optional string): New assignee of the task.
  - `description` (optional string): New description of the task.
  - `priority` (optional string): New priority level of the task.

- **Return Values**
  - `200 OK` on success:
    ```json
    {
        "message": "Task updated successfully.",
        "task": {
            // Updated task object details
        }
    }
    ```
  - `500 Internal Server Error` on failure:
    ```json
    {
        "message": "Error message describing the issue.",
        "error": { /* Error details */ }
    }
    ```

---

## Delete a Task

- **URL**
  - `DELETE /tasks/delete/task`
  - `http://localhost:1337/tasks/delete/task`

- **Description**
  - Deletes a specific task by its ID.

- **Request Parameters**
  - `id` (string): ID of the task to be deleted.

- **Return Values**
  - `200 OK` on success:
    ```json
    {
        "message": "Task deleted successfully.",
        "task": {
            // Deleted task object details
        }
    }
    ```
  - `500 Internal Server Error` on failure:
    ```json
    {
        "message": "Error message describing the issue.",
        "error": { /* Error details */ }
    }
    ```

---

## Delete Multiple Tasks

- **URL**
  - `DELETE /tasks/delete/tasks`
  - `http://localhost:1337/tasks/delete/tasks`

- **Description**
  - Deletes multiple tasks.

- **Request Parameters**
  - `ids` (array of strings): IDs of the tasks to be deleted.

- **Return Values**
  - `200 OK` on success:
    ```json
    {
        "message": "3 tasks deleted successfully."
    }
    ```
  - `500 Internal Server Error` on failure:
    ```json
    {
        "message": "Error message describing the issue.",
        "error": { /* Error details */ }
    }
    ```
