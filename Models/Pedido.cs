using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BeautyStore.Models
{
    public class Pedido
    {
        [Key]
        public int IdPedido { get; set; }

        public DateTime FechaPedido { get; set; } = DateTime.Now;

        [Column(TypeName = "decimal(10,2)")]
        public decimal Total { get; set; }

        public string Estado { get; set; } = "Pendiente";

        public int IdUsuario { get; set; }

        [JsonIgnore]
        public Usuario? Usuario { get; set; }

        [JsonIgnore]
        public ICollection<DetallePedido> Detalles { get; set; }
        = new List<DetallePedido>();
    }
}
