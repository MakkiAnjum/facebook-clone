import React from "react";
import "./StoryReel.css";
import Story from "./Story";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image="https://images.unsplash.com/photo-1599738001738-ab67bf681c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2501&q=80"
        title="Howard Tan"
      />
      <Story
        profileSrc="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
        image="https://images.unsplash.com/photo-1599715939861-36c598ae5568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        title="Mike Benson"
      />
      <Story
        profileSrc="https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"
        image="https://images.unsplash.com/photo-1599701834133-9ae09fcfa601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        title="Jack Pitt"
      />
      <Story
        profileSrc="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        image="https://images.unsplash.com/photo-1599709513174-6309fb9c0a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        title="Susan Johson"
      />
      <Story
        profileSrc="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        image="https://images.unsplash.com/photo-1599744317651-f1f6863d95ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
        title="Kate Jasmine"
      />
    </div>
  );
}
