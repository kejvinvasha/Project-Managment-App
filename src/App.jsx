import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NoProject from "./components/NoProject";
import Project from "./components/Project";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    projectSelected: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectSelectedId: prevProjectsState.projectSelected,
        id: taskId,
      };

      return {
        ...prevProjectsState,
        tasks: [...prevProjectsState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleNewProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projectSelected: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projectSelected: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projectSelected: undefined,
        projects: prevProjectsState.projects.filter(
          (project) => project.id !== prevProjectsState.projectSelected
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevProjectsState,
        projectSelected: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projectSelected: id,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.projectSelected
  );

  let content;

  if (projectsState.projectSelected === undefined) {
    content = <NoProject onNewProject={handleNewProject} />;
  } else if (projectsState.projectSelected === null) {
    content = (
      <NewProject
        onCancelProject={handleCancelProject}
        onAddProject={handleAddProject}
      />
    );
  } else {
    content = (
      <Project
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onDeleteProject={handleDeleteProject}
        project={selectedProject}
        tasks={projectsState.tasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projectList={projectsState.projects}
        onSelectProject={handleSelectProject}
        onNewProject={handleNewProject}
        selectedProjectId={projectsState.projectSelected}
      />
      {content}
    </main>
  );
}

export default App;
