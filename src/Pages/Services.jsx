import Card from "react-bootstrap/Card";

export const Services = () => {

    const services = [
        {name: 'Air Conditioning Units (HVAC)',
            description: 'Repair and Installation of air conditioning units residential and commercial',
            image: ''},
        {name: 'Electricity', description: 'Electric repairs and installations', image: ''},
        {name: 'Plumbing', description: 'Plumbing Repairs and installations', image: ''},
        {name: 'Appliances',
            description: 'House appliances (stove/oven, washer/dryer, microwave) installation and repair',
            image: ''},
    ]

  return(
      <section style={{height: '100vh'}} id={'services'}>
          <div>
            <h1 style={{display: 'flex', paddingTop: '134px', paddingLeft: '241px', marginBottom: 0,
                fontStyle: 'normal', fontWeight: 700, fontSize: '200px',
                lineHeight: '240px', color: 'rgba(61, 81, 101, 0.15)'}}>
                Services
            </h1>
            <h3 style={{
                display: 'flex', paddingLeft: '210px', marginTop: '-80px',
                fontStyle: 'normal', fontWeight: 700, fontSize: '70px',
                lineHeight: '84px', color:' #3D5165'}}>
                Services
            </h3>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', height: '500px', backgroundColor: '#3D5165', alignItems: "center"}}>
              <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                  {services.map((service, index) =>
                      <Card key={index} style={{ width: '18rem', height: '200px'}}>
                          <Card.Img variant="top" src={service.image} />
                            <Card.Body>
                              <Card.Title>{service.name}</Card.Title>
                              <Card.Text>{service.description}</Card.Text>
                          </Card.Body>
                      </Card>
                  )}
              </div>
          </div>
      </section>
  )
}