
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, CreditCard, Package, Settings } from "lucide-react";

const CodeExamples = () => {
  return (
    <section id="examples" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real-World Examples
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            See how Finito handles complex business flows with clean, readable Java code.
          </p>
        </div>

        <Tabs defaultValue="cart" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
            <TabsTrigger value="cart" className="text-white data-[state=active]:bg-blue-600">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shopping Cart
            </TabsTrigger>
            <TabsTrigger value="order" className="text-white data-[state=active]:bg-blue-600">
              <Package className="w-4 h-4 mr-2" />
              Order Processing
            </TabsTrigger>
            <TabsTrigger value="payment" className="text-white data-[state=active]:bg-blue-600">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Flow
            </TabsTrigger>
            <TabsTrigger value="approval" className="text-white data-[state=active]:bg-blue-600">
              <Settings className="w-4 h-4 mr-2" />
              Approval Workflow
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cart" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Shopping Cart State Machine</h3>
                <p className="text-blue-200 mb-6">
                  Complete e-commerce cart flow with user authentication, item management, 
                  and payment processing with conditional logic.
                </p>
                <div className="space-y-3">
                  <Badge className="bg-green-600 text-white">Security Integration</Badge>
                  <Badge className="bg-purple-600 text-white">Conditional States</Badge>
                  <Badge className="bg-orange-600 text-white">Action Composition</Badge>
                </div>
              </div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <pre className="text-xs text-green-400 overflow-x-auto max-h-96">
                    <code>{`new FluentFlowReader(stmFlowStore)
    .newFlow("cart-flow")
    .makeDefault()
    .securityStrategy(new MockSecurityStrategy())
    .entryAction(new EntryAction())
    .exitAction(new ExitAction())
    .manualState("CREATED", true)
        .on("close")
            .transitionTo("CLOSED", "cart-flow")
            .makeInvokableOnlyFromStm()
            .state()
        .on("addItem")
            .transitionAction(new AddItem())
            .state()
        .on("userLogin")
            .transitionAction(new UserLogin())
            .acl("USER_MUST_BE_ABLE_TO_LOGIN,USER_CAN_ACCESS_SYSTEM")
            .state()
        .on("initiatePayment")
            .transitionAction(new InitiatePayment())
            .transitionTo("PAYMENT_INITIATED")
            .state()
        .flow()
    .manualState("PAYMENT_INITIATED")
        .on("approve")
            .transitionAction(new ApproveCart())
            .state()
        .on("confirmPayment")
            .transitionAction(new ConfirmPayment())
            .transitionTo("TEST_STATE")
            .state()
        .flow()
    .autoState("TEST_STATE")
        .component(new IfAction<>())
        .property("condition", "approved")
        .property("then", "success")
        .property("else", "failure")
        .on("success")
            .transitionTo("PAYMENT_CONFIRMED")
            .state()
        .on("failure")
            .transitionTo("PAYMENT_INITIATED")
            .state()
        .flow()
    .manualState("PAYMENT_CONFIRMED")
        .flow()
    .manualState("CLOSED");`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="order" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Order Processing Pipeline</h3>
                <p className="text-blue-200 mb-6">
                  Enterprise order fulfillment with inventory checks, shipping, 
                  and automated notifications.
                </p>
                <div className="space-y-3">
                  <Badge className="bg-blue-600 text-white">Inventory Integration</Badge>
                  <Badge className="bg-green-600 text-white">Async Processing</Badge>
                  <Badge className="bg-red-600 text-white">Error Handling</Badge>
                </div>
              </div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <pre className="text-xs text-green-400 overflow-x-auto max-h-96">
                    <code>{`new FluentFlowReader(orderFlowStore)
    .newFlow("order-processing")
    .securityStrategy(new OrderSecurityStrategy())
    .manualState("RECEIVED", true)
        .on("validate")
            .transitionAction(new ValidateOrder())
            .transitionTo("VALIDATION")
            .state()
        .flow()
    .autoState("VALIDATION")
        .component(new OrderValidator())
        .property("timeout", "30000")
        .on("valid")
            .transitionTo("INVENTORY_CHECK")
            .state()
        .on("invalid")
            .transitionAction(new RejectOrder())
            .transitionTo("REJECTED")
            .state()
        .flow()
    .autoState("INVENTORY_CHECK")
        .component(new InventoryChecker())
        .on("available")
            .transitionAction(new ReserveInventory())
            .transitionTo("PROCESSING")
            .state()
        .on("unavailable")
            .transitionAction(new BackorderItem())
            .transitionTo("BACKORDERED")
            .state()
        .flow()
    .manualState("PROCESSING")
        .on("ship")
            .transitionAction(new CreateShipment())
            .transitionTo("SHIPPED")
            .state()
        .on("cancel")
            .transitionAction(new ReleaseInventory())
            .transitionTo("CANCELLED")
            .state()
        .flow()
    .manualState("SHIPPED")
        .on("deliver")
            .transitionAction(new ConfirmDelivery())
            .transitionTo("DELIVERED")
            .state()
        .flow()
    .manualState("DELIVERED");`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payment" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Payment Processing Flow</h3>
                <p className="text-blue-200 mb-6">
                  Secure payment handling with multiple payment methods, fraud detection, 
                  and retry mechanisms.
                </p>
                <div className="space-y-3">
                  <Badge className="bg-red-600 text-white">Fraud Detection</Badge>
                  <Badge className="bg-yellow-600 text-white">Retry Logic</Badge>
                  <Badge className="bg-green-600 text-white">Multi-Gateway</Badge>
                </div>
              </div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <pre className="text-xs text-green-400 overflow-x-auto max-h-96">
                    <code>{`new FluentFlowReader(paymentFlowStore)
    .newFlow("payment-processing")
    .securityStrategy(new PciComplianceStrategy())
    .manualState("INITIATED", true)
        .on("process")
            .transitionAction(new InitiatePayment())
            .transitionTo("FRAUD_CHECK")
            .state()
        .flow()
    .autoState("FRAUD_CHECK")
        .component(new FraudDetector())
        .property("riskThreshold", "0.8")
        .on("lowRisk")
            .transitionTo("GATEWAY_PROCESSING")
            .state()
        .on("highRisk")
            .transitionAction(new FlagTransaction())
            .transitionTo("MANUAL_REVIEW")
            .state()
        .flow()
    .autoState("GATEWAY_PROCESSING")
        .component(new PaymentGateway())
        .property("timeout", "45000")
        .property("retries", "3")
        .on("success")
            .transitionAction(new RecordPayment())
            .transitionTo("COMPLETED")
            .state()
        .on("declined")
            .transitionAction(new HandleDecline())
            .transitionTo("DECLINED")
            .state()
        .on("timeout")
            .transitionTo("RETRY")
            .state()
        .flow()
    .manualState("RETRY")
        .on("retry")
            .transitionTo("GATEWAY_PROCESSING")
            .state()
        .on("cancel")
            .transitionTo("CANCELLED")
            .state()
        .flow()
    .manualState("MANUAL_REVIEW")
        .acl("PAYMENT_REVIEWER_ROLE")
        .on("approve")
            .transitionTo("GATEWAY_PROCESSING")
            .state()
        .on("reject")
            .transitionTo("DECLINED")
            .state()
        .flow()
    .manualState("COMPLETED")
    .manualState("DECLINED")
    .manualState("CANCELLED");`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approval" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Multi-Level Approval Workflow</h3>
                <p className="text-blue-200 mb-6">
                  Enterprise approval process with hierarchical permissions, 
                  escalation, and audit trails.
                </p>
                <div className="space-y-3">
                  <Badge className="bg-purple-600 text-white">Role-Based ACL</Badge>
                  <Badge className="bg-orange-600 text-white">Auto Escalation</Badge>
                  <Badge className="bg-blue-600 text-white">Audit Logging</Badge>
                </div>
              </div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <pre className="text-xs text-green-400 overflow-x-auto max-h-96">
                    <code>{`new FluentFlowReader(approvalFlowStore)
    .newFlow("approval-workflow")
    .securityStrategy(new RoleBasedSecurityStrategy())
    .manualState("SUBMITTED", true)
        .on("review")
            .transitionAction(new AssignReviewer())
            .transitionTo("LEVEL_1_REVIEW")
            .state()
        .flow()
    .manualState("LEVEL_1_REVIEW")
        .acl("REVIEWER_LEVEL_1")
        .on("approve")
            .transitionAction(new LogApproval())
            .transitionTo("AMOUNT_CHECK")
            .state()
        .on("reject")
            .transitionAction(new LogRejection())
            .transitionTo("REJECTED")
            .state()
        .on("escalate")
            .transitionAction(new EscalateToLevel2())
            .transitionTo("LEVEL_2_REVIEW")
            .state()
        .flow()
    .autoState("AMOUNT_CHECK")
        .component(new AmountValidator())
        .property("threshold", "10000")
        .on("underThreshold")
            .transitionTo("APPROVED")
            .state()
        .on("overThreshold")
            .transitionTo("LEVEL_2_REVIEW")
            .state()
        .flow()
    .manualState("LEVEL_2_REVIEW")
        .acl("REVIEWER_LEVEL_2,MANAGER")
        .on("approve")
            .transitionAction(new FinalApproval())
            .transitionTo("APPROVED")
            .state()
        .on("reject")
            .transitionAction(new FinalRejection())
            .transitionTo("REJECTED")
            .state()
        .on("requestMoreInfo")
            .transitionAction(new RequestAdditionalInfo())
            .transitionTo("PENDING_INFO")
            .state()
        .flow()
    .manualState("PENDING_INFO")
        .on("provideInfo")
            .transitionAction(new UpdateSubmission())
            .transitionTo("LEVEL_2_REVIEW")
            .state()
        .flow()
    .manualState("APPROVED")
        .entryAction(new NotifyApproval())
        .flow()
    .manualState("REJECTED")
        .entryAction(new NotifyRejection());`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CodeExamples;
