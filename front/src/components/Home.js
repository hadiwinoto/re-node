import React from "react";
import { Container, Item} from 'semantic-ui-react'

const Home = () => {
 
  return (
        <Container>
            <div className="card">
              <Item.Group>
                <Item>
                  <Item.Content>
                      Selamat Datang di DAnS Multi Pro Jobs Portal
                  </Item.Content>
                </Item>
                </Item.Group>
            </div>
        </Container>
  );
};

export default Home;
