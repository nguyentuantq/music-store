import React, { useEffect, useState } from "react";
import InputSearch from "./InputSearch";

import { getDataArtist, getDataTrack } from "../commons/api";
import { ArtistItem, TrackItem } from "../commons/interfaces";
import ArtistResult from "./ArtistResult";
import TrackResult from "./TrackResult";

function MusicStoreApp() {
  const TOKEN =
    "BQDhC3U3Z7q9EnWH7DyL9bvwZURQ61k_U7Zf-IasQNyx_lBcWwfA88q8n5g3kMZIt_wO8lJYloutZru2ptge84DSE4rpMoFJjTdZgehE4RGxjg6ye3s1Plg1kOatza5bgTlnMY5Txqg6roBqvIlTBQ3cv_36AX5J5eWEUcH7";

  const [dataArtist, setDataArtist] = useState<ArtistItem[]>([]);
  const [dataTracks, setDataTrack] = useState<TrackItem[]>([]);

  const handleSearch = async (keyWord: string) => {
    if (keyWord && keyWord.length > 0) {
      const result = await getDataArtist(keyWord, TOKEN);
      setDataArtist(result.data.artists.items);
    }
  };

  const handleTrack = async (id: string) => {
    if (id && id.length > 0) {
      const newDataTrack = await getDataTrack(id, TOKEN);
      setDataTrack(newDataTrack.data.tracks);
    }
  };
  if (dataArtist && dataArtist.length > 0) {
    return (
      <div className="container">
        <InputSearch handleInputSearch={handleSearch} />
        <ArtistResult
          dataArtistItems={dataArtist}
          handleArtistId={handleTrack}
        />
        <TrackResult dataTrackItems={dataTracks} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <InputSearch handleInputSearch={handleSearch} />
        <ArtistResult
          dataArtistItems={dataArtist}
          handleArtistId={handleTrack}
        />
      </div>
    );
  }
}

export default MusicStoreApp;
