import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
function TotalPrice(props) {
  const { data } = props.services;

  return (
    <Card>
      <h1>Purchased Services</h1>

      <CardContent>
        {data &&
          data.purchased_services.map((service, i) => (
            <Card key={i}>
              {service.purchased_office_template.purchased_office_services.map(
                (s, i) => (
                  <Card key={i}>
                    <CardContent>
                      <Typography>{`${s.name} - ${s.price}`}</Typography>
                    </CardContent>
                  </Card>
                )
              )}
            </Card>
          ))}
      </CardContent>
    </Card>
  );
}

export default TotalPrice;
