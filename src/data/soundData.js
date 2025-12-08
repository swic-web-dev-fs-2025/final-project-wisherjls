// Sound data - each sound has an id, name, and file path
const soundFiles = [
  { id: 1, name: "a few moments later", file: "/sounds/a few moments later.mp3" },
  { id: 2, name: "cartoon hammer", file: "/sounds/cartoon hammer.mp3" },
  { id: 3, name: "ding", file: "/sounds/ding.mp3" },
  { id: 4, name: "discord notification", file: "/sounds/discord notification.mp3" },
  { id: 5, name: "fail", file: "/sounds/fail.mp3" },
  { id: 6, name: "pew", file: "/sounds/pew.mp3" },
  { id: 7, name: "quack", file: "/sounds/quack.mp3" },
  { id: 8, name: "taco bell", file: "/sounds/taco bell.mp3" },
  { id: 9, name: "undertaker", file: "/sounds/undertaker.mp3" },
  { id: 10, name: "windows 7", file: "/sounds/windows 7.mp3" },
  { id: 11, name: "windows 10", file: "/sounds/windows 10.mp3" },
  { id: 12, name: "wow", file: "/sounds/wow.mp3" },
];

// Sort alphabetically by name
export const soundData = [...soundFiles].sort((a, b) => 
a.name.localeCompare(b.name)
);
