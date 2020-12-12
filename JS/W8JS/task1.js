"use strict";

// 1. Создать страницу, которая выводит нумерованный список песен:

var playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" },
];

const root = document.getElementById("root");
const listSongs = document.createElement("ol");
listSongs.className = "songs__list";
listSongs.style.marginBottom = "40px";
root.append(listSongs);

const createListSongs = (list) => {
  list.forEach((element) => {
    const item = document.createElement("li");
    item.className = "songs__item";
    const itemText = document.createElement("p");
    itemText.className = "songs__text";
    itemText.innerText = element.song;
    item.append(itemText);
    listSongs.append(item);
  });
};

createListSongs(playList);


