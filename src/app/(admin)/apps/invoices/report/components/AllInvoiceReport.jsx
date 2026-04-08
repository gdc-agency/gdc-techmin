import { currency } from '@/context/constants';
import { getAllInvoices, getReferralsData } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import { Button, Card, CardBody, CardTitle, Nav, NavItem, NavLink, TabContainer, TabContent, Table, TabPane } from 'react-bootstrap';
const Invoices = () => {
  const allInvoices = useFetchData(getAllInvoices);
  return <div className="table-responsive">
      <Table className="align-middle mb-0">
        <thead>
          <tr className="bg-light">
            <th>
              <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
            </th>
            <th>Customer</th>
            <th>Product</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Vendor</th>
            <th>Status</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allInvoices?.map((invoice, idx) => <tr key={idx}>
              <td>
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar-sm rounded-circle">
                    {invoice.user && <img src={invoice.user.avatar} alt="" className="img-fluid rounded-circle" />}
                  </div>
                  <div className="ps-2">
                    <h5 className="mb-1">{invoice.user?.name}</h5>
                    <p className="text-muted fs-6 mb-0">#{invoice.id}</p>
                  </div>
                </div>
              </td>
              <td>{invoice.product}</td>
              <td>{new Date(invoice.date).toLocaleDateString()}</td>
              <td>
                <span className={`text-${invoice.status === 'Unpaid' ? 'danger' : 'success'} fw-bold`}>
                  {currency}
                  {invoice.amount}
                </span>
              </td>
              <td>{invoice.vendor}</td>
              <td>
                <span className={`badge bg-${invoice.status === 'Unpaid' ? 'danger' : 'success'}-subtle text-${invoice.status === 'Unpaid' ? 'danger' : 'success'}`}>
                  {invoice.status}
                </span>
              </td>
              <td>
                <h5 className="mb-0">
                  {invoice.review.rate} <span className="fs-12 text-muted">({invoice.review.vote} Votes)</span>
                </h5>
              </td>
              <td>
                <Button variant="outline-dark">Details</Button>
              </td>
            </tr>)}
        </tbody>
      </Table>
    </div>;
};
const Referrals = () => {
  const allReferrals = useFetchData(getReferralsData);
  return <div className="table-responsive">
      <table className="table align-middle mb-0">
        <thead>
          <tr className="bg-light">
            <th>
              <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
            </th>
            <th>Source</th>
            <th>View</th>
            <th>Sales</th>
            <th>Convertion</th>
            <th>Total</th>
            <th>Rate</th>
            <th>
              <div>
                <span>Action</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {allReferrals?.map((referral, idx) => <tr key={idx}>
              <td>
                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar-sm ">
                    <img src={referral.image} alt="" className="img-fluid rounded-circle" />
                  </div>
                  <div className="ps-2">
                    <h5 className="mb-1">{referral.name}</h5>
                  </div>
                </div>
              </td>
              <td>{referral.view}</td>
              <td>{referral.sales}</td>
              <td>{referral.conversion} </td>
              <td>
                <h5 className="text-success mb-0">
                  {currency}
                  {referral.total}
                </h5>
              </td>
              <td>{referral.rate}</td>
              <td>
                <Button variant="outline-dark">Details</Button>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
};
const AllInvoiceReport = () => {
  return <Card>
      <TabContainer defaultActiveKey={'1'}>
        <CardBody>
          <div className="d-flex justify-content-between">
            <div>
              <CardTitle className="mb-1">All Invoices</CardTitle>
            </div>
            <Nav as={'ul'} className="nav-pills nav-justified " role="tablist">
              <NavItem as={'li'} role="presentation">
                <NavLink eventKey="1" className="rounded-0" aria-selected="true" role="tab">
                  Invoices
                </NavLink>
              </NavItem>
              <NavItem as={'li'} role="presentation">
                <NavLink eventKey="2" className="rounded-0" aria-selected="false" role="tab" tabIndex={-1}>
                  Referrals
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </CardBody>
        <TabContent>
          <TabPane eventKey="1" id="home1" role="tabpanel">
            <Invoices />
          </TabPane>
          <TabPane eventKey="2" id="profile1" role="tabpanel">
            <Referrals />
          </TabPane>
        </TabContent>
      </TabContainer>
    </Card>;
};
export default AllInvoiceReport;