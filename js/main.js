
const elements = document.querySelectorAll('.scroll-reveal');

function toggleScrollReveal() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < triggerBottom && rect.bottom > 100;

    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', toggleScrollReveal);
window.addEventListener('load', toggleScrollReveal);


//modals ventnas seccion preminun index
function openModal(id) {
  document.getElementById('modal-' + id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById('modal-' + id).style.display = 'none';
}

// Cerrar si se hace clic fuera del modal
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}


//modulo 1---modals


  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modals = document.querySelectorAll('.modal');
    const closes = document.querySelectorAll('.close');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const target = card.getAttribute('data-modal');
        document.getElementById(target).style.display = 'block';
      });
    });

    closes.forEach(btn => {
      btn.addEventListener('click', () => {
        modals.forEach(modal => modal.style.display = 'none');
      });
    });

    window.addEventListener('click', e => {
      modals.forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });


  //acordeon seccion estructura presupesuto
  
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const isActive = body.style.maxHeight;
      document.querySelectorAll(".accordion-body").forEach(el => el.style.maxHeight = null);
      if (!isActive) {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  //seccion presupuesto ciclo


  const descriptions = {
    "1": "📌 Planeación: definición de metas y estimaciones.",
    "2": "✅ Aprobación: validación por parte de la gerencia o socios.",
    "3": "🚀 Ejecución: implementación del presupuesto en las operaciones.",
    "4": "📊 Control y seguimiento: comparación entre lo presupuestado y lo real.",
    "5": "🔁 Evaluación y ajuste: identificar desviaciones y corregir proyecciones.",
    "6": "💡 Importancia del control: Permite tomar decisiones correctivas y garantizar sostenibilidad financiera."
  };

  // Colocar nodos en círculo
  const radius = 140; // radio del círculo
  const phases = document.querySelectorAll(".phase");
  const total = phases.length;

  phases.forEach((phase, i) => {
    const angle = (i / total) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    phase.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Mostrar descripción
  const infoBox = document.getElementById("phase-info");
  phases.forEach(phase => {
    phase.addEventListener("click", () => {
      const key = phase.getAttribute("data-phase");
      infoBox.innerHTML = `<p>${descriptions[key]}</p>`;
      infoBox.style.display = "block";
    });
  });






