"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleClick} className="like-button">
      Curtir ({likes})
    </button>
  );
}