import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import math from "math.js";
import "./Components.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins`).then((res) => {
      setCoin(res.data.coins);
    });
  }, []);

  const Coinfilter = coin.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Coins">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/crypto.jpg" alt="logo" height={100} />
      </div>
      <div className="Searchbar">
        <TextField
          id="input-with-icon-adornment"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          label="Search your cryptocurrencies"
        />
      </div>
      <table>
        <thead className="Header">
          <tr className="Coinrows">
            <td>#</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </thead>
        <tbody className="CoinBody">
          {Coinfilter.map((data, id) => {
            return (
              <>
                <tr id={id}>
                  <td className="rank">{data.rank}</td>
                  <td className="logo">
                    <img src={data.icon} alt="logo" width="30px" />
                    <p>{data.name}</p>
                  </td>
                  <td className="symbol">{data.symbol}</td>
                  <td>
                    $
                    {math
                      .floor(data.marketCap.toFixed(0), 1)
                      .toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                  </td>
                  <td>${data.price.toFixed(2)}</td>
                  <td>
                    {math
                      .floor(data.availableSupply.toFixed(0))
                      .toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                    .
                  </td>
                  <td>
                    {math.floor(data.volume, 1).toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    })}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
