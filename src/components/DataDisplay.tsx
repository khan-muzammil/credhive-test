import React, { useState } from "react";
import { CompanyInfo } from "../types";
import {
  Box,
  Card,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Tag,
} from "@chakra-ui/react";

interface DataDisplayProps {
  data: CompanyInfo[];
}
const statusColors = {
  active: "green",
  pending: "yellow",
  default: "red",
};

export const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CompanyInfo | null>(null);
  const handleOpen = (item: CompanyInfo) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mx-3 lg:mx-10 my-2">Total items: {data.length}</div>
      <Box className="flex flex-wrap gap-3 justify-center">
        {data.map((item, index) => (
          <Card
            key={index}
            className="mb-4 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            onClick={() => handleOpen(item)}
          >
            <Image src={item.logo} alt={item.companyName} />
            <Text>{item.companyName}</Text>
            <Tag
              width={"fit-content"}
              colorScheme={
                statusColors[item.accountStatus] || statusColors.default
              }
            >
              {item.accountStatus}
            </Tag>

            <Text>{item.address}</Text>
            <Text>{item.registrationDate.toLocaleDateString()}</Text>
          </Card>
        ))}
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedItem?.companyName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Number of Employees: {selectedItem?.numberOfEmployees}
              </Text>
              <Text>Raised Capital: {selectedItem?.raisedCapital}</Text>
              <Text>Turnover: {selectedItem?.turnover}</Text>
              <Text>Net Profit: {selectedItem?.netProfit}</Text>
              <Text>Contact Number: {selectedItem?.contactNumber}</Text>
              <Text>Contact Email: {selectedItem?.contactEmail}</Text>
              <Text>Company Website: {selectedItem?.companyWebsite}</Text>
              <Text>Loan Amount: {selectedItem?.loanAmount}</Text>
              <Text>Loan Interest: {selectedItem?.loanInterest}</Text>
              <Text>Account Status: {selectedItem?.accountStatus}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
