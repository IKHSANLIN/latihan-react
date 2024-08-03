import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

const ContohForm2 = () => {
  const defaultState: User = {
    name: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState<User>(defaultState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <Card w={"xl"}>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Nama</FormLabel>
              <Input
                type="text"
                onChange={(e) => {
                  setForm((f) => {
                    return {
                      ...f,
                      name: e.target.value,
                    };
                  });
                }}
              />
              <FormHelperText>We'll never share your name.</FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) =>
                  setForm((f) => ({ ...f, password: e.target.value }))
                }
              />
              <FormHelperText>We'll never share your password.</FormHelperText>
            </FormControl>
            <Button type="submit">Submit Button</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};
export default ContohForm2;
