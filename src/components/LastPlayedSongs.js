import React, { useEffect } from "react";

const LastPlayedSongs = () => {
  useEffect(() => {
    const apiKey = "4b197f8df2267128e8fca83a9087d1b3"; // Replace with your actual Last.fm API key
    const username = "riishiiiii"; // Replace with your Last.fm username
    const tracksContainer = document.getElementById("tracks-container");

    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=8`,
    )
      .then((response) => response.json())

      .then((data) => {
        data.recenttracks.track.slice(0, 8).forEach((track) => {
          const artist = track.artist["#text"];
          const trackName = track.name;
          const imageUrl = track.image[2]["#text"]; // Use the medium-sized image

          const trackCard = document.createElement("div");
          trackCard.classList.add("col");

          trackCard.innerHTML = `
            <div class="card track-card">
              <img class="card-img-top" src="${imageUrl}" alt="${trackName} - ${artist}">
              <div class="card-body">
                <h5 class="fs-6 card-title">${limitCharacters(trackName, 10)}</h5>
                <p class="fs-6 card-text">${limitCharacters(artist, 10)}</p>
              </div>
            </div>
          `;

          // Function to limit characters and append "..."
          function limitCharacters(input, maxLength) {
            if (input.length > maxLength) {
              return input.substring(0, maxLength) + "...";
            }
            return input;
          }

          tracksContainer.appendChild(trackCard);
        });
      })
      .catch((error) => console.error("Error fetching recent tracks:", error));
  }, []);

  return (
    <>
      <div className="container section-py">
        <h3 className="heading-lg" style={{ fontSize: "1.5rem" }}>
          My Last Played Songs
        </h3>
        <div id="tracks-container" className="row mt-2"></div>
      </div>
    </>
  );
};

export default LastPlayedSongs;
