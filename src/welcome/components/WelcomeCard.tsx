import { Button } from "../../components";
import { Card } from "../../components";
import { Typography } from "../../components";

export const WelcomeCard = () => (
  <Card>
    <Card.Header>
      <Typography variant="h2">Welccome traveler!</Typography>
    </Card.Header>
    <Card.Content>
      <Typography> Welcome traveler to our humble doors!</Typography>
      <Typography>
        What? You don't know where you are? What are you doing here! Bah ... I'm
        already telling you. You are in the most wonderful place in this part!
        In the forge and general store of Gorim Neckbreaker!
      </Typography>
      <Typography>
        Take a look and when you're ready ... ding! We'll make a deal. So that I
        don't forget, we put out new goods every two minutes, so make up your
        mind quickly!
      </Typography>
    </Card.Content>
    <Card.Footer>
      <Button to="/shop">Go to shop</Button>
    </Card.Footer>
  </Card>
);
