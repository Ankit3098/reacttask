import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions, Typography } from "@material-ui/core";
function PurchasedServices(props) {
  const { data } = props.services;
  return (
    <Card>
      <CardContent>
        <h1>Purchased Services</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          laborum. Saepe ducimus distinctio voluptatem reprehenderit nemo odit
          accusantium, tempora, necessitatibus, at nihil itaque? Saepe dolor
          dolore error eum, aliquam labore.
        </p>
        {data &&
          data.purchased_services.map((service, i) => (
            <Card key={i}>
              <Typography gutterBottom variant="h5" component="h2">
                {service.name}
              </Typography>

              {service.purchased_office_template.purchased_office_services.map(
                (s, i) => (
                  <Card key={i}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={s.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {s.name}
                      </Typography>
                      <Typography>{s.description}</Typography>
                    </CardContent>
                    <CardActions>{s.price}</CardActions>
                  </Card>
                )
              )}
            </Card>
          ))}
      </CardContent>
    </Card>
  );
}

export default PurchasedServices;
