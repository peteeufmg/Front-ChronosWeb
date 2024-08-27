import { ConfigProvider, Segmented, Space, Table, Tabs } from "antd";
import { Container, TableContainer } from "./style";
import NavBar from "../../Components/NavBar" 
import { useEffect, useState } from "react";

export default function Ranking() {
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [segmentedOptions, setSegmentedOptions] = useState(["Classificatoria", "Repescagem", "Final"]);
    const [roundAvancada, setRoundAvancada] = useState("Classificatoria");
    const [roundMirim, setRoundMirim] = useState("Classificatoria");
    
    
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
          title: 'Posição',
          dataIndex: 'age',
          key: 'age',
          align: "center",
          render: (_, __, index) => index + 1,
          width: 100,
        },
        {
          title: 'Equipe',
          dataIndex: 'address',
          key: 'address',
          width: 250
        },
        {
            title: "Pontuação",
            dataIndex: "name",
            key: "score",
            align: "center",
            width: 150
        }
    ];
    
    async function requestAPI(category, round) {
        switch (category == 1) {
            
        }
    };

    // Table data API request
    useEffect(() => {
        if (selectedCategory == 1) {
            switch (roundAvancada) {
                case "Classificatoria":

            }
        }
    }, [selectedCategory, roundMirim, roundAvancada])

    // Configuração tabela
    const tableAvancada = <TableContainer>
            <Segmented 
                options={segmentedOptions}
                onChange={e => setRoundAvancada(e)}
                />
            <div style={{height: "10px"}}/>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{position: ["none", "none"]}}
                />
        </TableContainer>

    const tableMirim = <TableContainer>
            <Segmented 
                options={segmentedOptions}
                onChange={e => setRoundMirim(e)}
            />
            <div style={{height: "10px"}}/>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{position: ["none", "none"]}}
            />
        </TableContainer>

    // Configuração Tabs
    const items = [
        {
          key: '1',
          label: 'Categoria Avançado',
          children: tableAvancada,
        },
        {
          key: '2',
          label: 'Categoria Mirim',
          children: tableMirim,
        }
      ];

    const handleTabs = (e) => {
        if (e == 1) {
            setSegmentedOptions(["Classificatoria", "Repescagem", "Final"])
        } else {
            setSegmentedOptions(["Classificatoria", "Final"]);
        }
    };

    // Customização da tabela e tabs
    const theme = {
        components: {
            Table: {

            },
            Tabs: {
                cardBg: "rgba(255, 255, 255, .9)",
                cardPaddingLG: "4px 20px 6px",
                horizontalMargin: "0 0 0 0",
                itemHoverColor: "#000000",
                itemSelectedColor: "#000000",

            }
        },
    };


    return(
        <ConfigProvider theme={theme}>
            <Container>
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    size="large"
                    items={items}
                    onChange={handleTabs}
                />
            </Container>
        </ConfigProvider>
    )
}