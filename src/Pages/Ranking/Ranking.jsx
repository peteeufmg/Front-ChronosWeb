import { ConfigProvider, Table, Tabs } from "antd";
import { Container, RankContainer, RanksContainer, RankTitle } from "./style";
import NavBar from "../../Components/NavBar" 

export default function Ranking() {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: (a, b) => a.age - b.age,
          defaultSortOrder: 'ascending'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
    ];

    const theme = {
        components: {
            Table: {

            },
        },
    };


    return(
        <ConfigProvider theme={theme}>
            <NavBar />
            <Container>
                <RanksContainer>
                    <RankContainer>
                        <RankTitle>Avançado</RankTitle>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            sortDirections={["ascend"]}
                            pagination={{position: ["none", "none"]}}
                        />
                    </RankContainer>
                    <RankContainer>
                        <RankTitle>Mirim</RankTitle>
                        <Table 
                            dataSource={dataSource}
                            columns={columns}
                            pagination={{position: ["none", "none"]}} 
                        />
                    </RankContainer>
                </RanksContainer>
            </Container>
        </ConfigProvider>
    )
}