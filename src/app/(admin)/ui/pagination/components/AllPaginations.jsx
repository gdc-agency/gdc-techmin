import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Pagination, Row } from 'react-bootstrap';
const DefaultPagination = () => {
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return <ComponentContainerCard title="Default Pagination" description={<p className="text-muted mb-0">Simple pagination inspired by Rdio, great for apps and search results.</p>}>
      <nav>
        <Pagination className="mb-0">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const PaginationWithStates = () => {
  return <ComponentContainerCard title="Disabled and active states" description={<p className="text-muted mb-0">
          Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and
          <code>.active</code> to indicate the current page.
        </p>}>
      <nav aria-label="...">
        <Pagination className="mb-0">
          <Pagination.Prev disabled>Previous</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const PaginationAlignment = () => {
  return <ComponentContainerCard title="Alignment" description={<p className="text-muted mb-0">Change the alignment of pagination components with flexbox utilities.</p>}>
      <nav aria-label="Page navigation example">
        <Pagination className="justify-content-center">
          <Pagination.Prev disabled>Previous</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </nav>
      <nav aria-label="Page navigation example">
        <Pagination className="justify-content-end">
          <Pagination.Prev disabled>Previous</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const RoundedPagination = () => {
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number} active={number === 3}>
        {number}
      </Pagination.Item>);
  }
  return <ComponentContainerCard title="Rounded Pagination" description={<p className="text-muted mb-0">
          Add <code> .pagination-rounded</code> for rounded pagination.
        </p>}>
      <nav>
        <Pagination className="pagination-rounded mb-0">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const PaginationSizes = () => {
  const items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return <ComponentContainerCard title="Sizing" description={<p className="text-muted mb-0">
          Add <code> .pagination-lg</code> or <code> .pagination-sm</code> for additional sizes.
        </p>}>
      <nav>
        <Pagination size="lg">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
        <Pagination size="sm">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const AllPaginations = () => {
  return <Row>
      <Col xl={6}>
        <DefaultPagination />
        <PaginationWithStates />
        <PaginationAlignment />
      </Col>
      <Col xl={6}>
        <RoundedPagination />
        <PaginationSizes />
      </Col>
    </Row>;
};
export default AllPaginations;