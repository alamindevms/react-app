import "./Hero.css";
import { useState, useEffect } from "react";
import playersData from "../../../assets/fakeData/players";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [players, setPlayers] = useState(playersData);
  useEffect(() => {
    fetch(playersData)
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const  [addplayer , setPlayer] = useState([])

  const handleAddPlayer = (player) => {
    const totalPlayer = [...addplayer , player]

    setPlayer(totalPlayer)
  }

  const total = addplayer.reduce((total , prd) => total += prd.salary , 0)

  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-8">
          <div className="row">
            {players.map((player) => {
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-img-top">
                    <img className="img-fluid" src={player.url} alt="" />
                  </div>
                  <div className="card-body">
                    <h4> {player.name} </h4>
                    <p> {player.salary} </p>
                    <button className="btn btn-info btn-block" onClick={() => handleAddPlayer(player)}>
                      <FontAwesomeIcon icon={faPlus} /> Add player
                    </button>
                  </div>
                </div>
              </div>
})}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-body">
            <p>Total Player: {addplayer.length}</p>
            <p>Total amount: {total} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
