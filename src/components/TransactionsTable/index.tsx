import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">$12.000</td>
            <td>Development</td>
            <td>21/03/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- $1.000</td>
            <td>Rent</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Website development</td>
            <td>$12.000</td>
            <td>Development</td>
            <td>21/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
