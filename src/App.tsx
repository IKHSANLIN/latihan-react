import { Card, CardBody, Button, Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="app">
      <Box maxW="lg" m={10}>
        <Card className="card">
          <CardBody>
            <Button size="md" variant={"solid"} colorScheme={"teal"}>
              Masuk
            </Button>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
}

export default App;
