import { useState } from "react";
import Modal from "../../../../components/modal/Modal";
import { useCreditSimulationContext } from "../../contexts/creditContext";
import DetailQuota from "../detail-quota/DetailQuota";
import "./credit-actions.css";

export default function CreditActions() {
  const [showModalObtain, setShowModalObtain] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  const { quotaErr, amountErr } = useCreditSimulationContext();

  return (
    <div className="container-buttons">
      <button
        className="button-obtain"
        onClick={() => setShowModalObtain(true)}
        disabled={quotaErr || amountErr}
      >
        OBTENÉ CRÉDITO
      </button>

      <button
        className="button-detail"
        onClick={() => setShowModalDetail(true)}
        disabled={quotaErr || amountErr}
      >
        VER DETALLES DE CUOTAS
      </button>

      <Modal isOpen={showModalObtain} onClose={() => setShowModalObtain(false)}>
        <h4 className="text-obtain">¡Crédito solicitado con éxito!</h4>
      </Modal>
      <Modal isOpen={showModalDetail} onClose={() => setShowModalDetail(false)}>
        <DetailQuota></DetailQuota>
      </Modal>
    </div>
  );
}
