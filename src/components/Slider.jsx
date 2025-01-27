import React from "react";

const Slider = () => {
  const courses = [
    { id: 1, title: "React desde cero", image: "/react-course.jpg" },
    { id: 2, title: "Introducción a Python", image: "/python-course.jpg" },
    { id: 3, title: "Machine Learning", image: "/ml-course.jpg" },
  ];

  return (
    <div class="mt-10 w-full overflow-hidden bg-gray-100 py-8">
      <div class="container mx-auto flex space-x-4 overflow-x-scroll no-scrollbar">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-shrink-0 w-64 rounded-lg shadow-lg bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              class="w-full h-40 object-cover rounded-t-lg"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">{course.title}</h3>
              <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Ver Curso
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
