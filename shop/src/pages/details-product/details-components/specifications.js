function Specifications({ item }) {
  return (
    <table>
      <tr>
        <td className="ligth-table">назва</td>
        <td>{item.name}</td>
      </tr>
      <tr>
        <td className="ligth-table">вид по класифікації</td>
        <td> Пиво Еліт Світле нефільтроване, непастеризоване</td>
      </tr>
      <tr>
        <td className="ligth-table">вміст алк.</td>
        <td>4%</td>
      </tr>
      <tr>
        <td className="ligth-table">oб'єм</td>
        <td>{item.size} </td>
      </tr>
      <tr>
        <td className="ligth-table">склад</td>
        <td> вода підготовлена, солод світлий ячмінний, хміль, дріжджі</td>
      </tr>
      <tr>
        <td className="ligth-table">термін придатності</td>
        <td>14 діб</td>
      </tr>
    </table>
  );
}
export { Specifications };
