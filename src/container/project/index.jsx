import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "./style";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Projetos() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function getItem() {
      const list = await axios.get("/service/data.json").then((res) => {
        const response = res.data.projetos;

        setApi(response);
        console.log(response);
      });
      return list;
    }
    getItem();
  }, []);

  return (
    <>
      <Container id="projetos">
        {api.map((item, id) => (
          <Card
            className="card"
            key={id}
            sx={{ maxWidth: 345 }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <CardMedia
              sx={{ height: 210 }}
              image={item.imagem}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.nome}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.tec.join(" - ")}
              </Typography>
            </CardContent>
            <CardActions
              style={{
                paddingLeft: "1em",
                fontSize: "1.2em",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link size="small" to={item.LGit} target="_blank">
                <BsGithub />
              </Link>
              <Link size="small" to={item.LSite} target="_blank">
                <BsGlobe />
              </Link>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
}
