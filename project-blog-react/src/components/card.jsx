import Card from 'react-bootstrap/Card';

export function HomeCard({data}) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body className=''>
        <Card.Title>{data.title}</Card.Title>
        <Card.Img variant="top" src={`https://picsum.photos/id/${data.id}/280/180`} />
        <Card.Text>
          {data.body}
        </Card.Text>
        <Card.Link href={`#post:${data.id}`}>Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}